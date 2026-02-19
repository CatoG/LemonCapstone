import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
const dispatch = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const headingElement = screen.getByText('Choose date');
  expect(headingElement).toBeInTheDocument();
});

test('BookingForm can be submitted by the user', () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={handleSubmit}
    />
  );

  // Fill in the required date field
  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2026-03-01' },
  });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /confirm reservation/i }));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    date: '2026-03-01',
    time: '17:00',
    guests: 2,
    occasion: 'Birthday',
  });
});
