import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { initializeTimes, updateTimes } from './Main';
import Main from './Main';

const mockTimes = ['17:00', '17:30', '18:00', '19:00', '20:00'];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
  window.submitAPI = jest.fn(() => true);
  localStorage.clear();
});

// --- pure function tests ---

test('initializeTimes calls fetchAPI with today\'s date and returns a non-empty array', () => {
  const today = new Date();
  const result = initializeTimes();

  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI).toHaveBeenCalledWith(
    expect.objectContaining({ getDate: expect.any(Function) })
  );
  const calledDate = window.fetchAPI.mock.calls[0][0];
  expect(calledDate.getDate()).toBe(today.getDate());
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(mockTimes);
});

test('updateTimes calls fetchAPI with the selected date and returns updated available times', () => {
  const selectedDate = '2026-03-15';
  const action = { type: 'UPDATE_TIMES', payload: selectedDate };
  const result = updateTimes(mockTimes, action);

  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(mockTimes);
});

test('updateTimes returns current state unchanged for an unknown action type', () => {
  const state = ['17:00', '18:00'];
  const result = updateTimes(state, { type: 'UNKNOWN' });
  expect(result).toEqual(state);
  expect(window.fetchAPI).not.toHaveBeenCalled();
});

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true };

// --- localStorage tests ---

test('reads existing bookings from localStorage on initial render', () => {
  const stored = [
    { date: '2026-03-01', time: '17:00', guests: 2, occasion: 'Birthday' },
  ];
  localStorage.setItem('bookingData', JSON.stringify(stored));

  render(
    <MemoryRouter initialEntries={['/reservations']} future={routerFuture}>
      <Main />
    </MemoryRouter>
  );

  expect(screen.getByText('Confirmed Reservations')).toBeInTheDocument();
  expect(screen.getByText('2026-03-01')).toBeInTheDocument();
  // Use getAllByText since "Birthday" also appears in the form select option
  const birthdayCells = screen.getAllByText('Birthday');
  expect(birthdayCells.length).toBeGreaterThanOrEqual(1);
});

test('writes new booking to localStorage after form submission', () => {
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  render(
    <MemoryRouter initialEntries={['/reservations']} future={routerFuture}>
      <Main />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2026-04-10' },
  });
  fireEvent.click(screen.getByRole('button', { name: /confirm reservation/i }));

  expect(setItemSpy).toHaveBeenCalledWith('bookingData', expect.any(String));
  const stored = JSON.parse(localStorage.getItem('bookingData'));
  expect(stored).toHaveLength(1);
  expect(stored[0].date).toBe('2026-04-10');

  setItemSpy.mockRestore();
});
