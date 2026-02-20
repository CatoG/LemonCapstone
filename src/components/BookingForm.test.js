import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm, { validate } from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
const dispatch = jest.fn();

// --- Static render ---

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const headingElement = screen.getByText('Choose date');
  expect(headingElement).toBeInTheDocument();
});

// --- HTML5 validation attributes ---

describe('HTML5 validation attributes', () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  });

  test('date input has type="date"', () => {
    expect(screen.getByLabelText('Choose date')).toHaveAttribute('type', 'date');
  });

  test('date input has required attribute', () => {
    expect(screen.getByLabelText('Choose date')).toBeRequired();
  });

  test('date input has a min attribute set to today or later', () => {
    const today = new Date().toISOString().split('T')[0];
    expect(screen.getByLabelText('Choose date')).toHaveAttribute('min', today);
  });

  test('time select has required attribute', () => {
    expect(screen.getByLabelText('Choose time')).toBeRequired();
  });

  test('time select renders the available time options', () => {
    availableTimes.forEach((t) => {
      expect(screen.getByRole('option', { name: t })).toBeInTheDocument();
    });
  });

  test('guests input has type="number"', () => {
    expect(screen.getByLabelText('Number of guests')).toHaveAttribute('type', 'number');
  });

  test('guests input has required attribute', () => {
    expect(screen.getByLabelText('Number of guests')).toBeRequired();
  });

  test('guests input has min="1"', () => {
    expect(screen.getByLabelText('Number of guests')).toHaveAttribute('min', '1');
  });

  test('guests input has max="10"', () => {
    expect(screen.getByLabelText('Number of guests')).toHaveAttribute('max', '10');
  });

  test('occasion select has required attribute', () => {
    expect(screen.getByLabelText('Occasion')).toBeRequired();
  });

  test('occasion select renders Birthday and Anniversary options', () => {
    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });
});

// --- Pure validate() function ---

describe('validate()', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const validBase = { date: '2026-03-01', time: '17:00', guests: 2, occasion: 'Birthday', availableTimes };

  test('returns date error when date is empty', () => {
    const errors = validate({ ...validBase, date: '' });
    expect(errors.date).toBe('Please select a date.');
  });

  test('returns date error when date is in the past', () => {
    const errors = validate({ ...validBase, date: '2020-01-01' });
    expect(errors.date).toBe('Date must not be in the past.');
  });

  test('returns time error when time is empty', () => {
    const errors = validate({ ...validBase, time: '' });
    expect(errors.time).toBe('Please select a time.');
  });

  test('returns time error when time is not in availableTimes', () => {
    const errors = validate({ ...validBase, time: '23:00' });
    expect(errors.time).toBe('Selected time is not available for this date.');
  });

  test('returns guests error when guests is below 1', () => {
    const errors = validate({ ...validBase, guests: 0 });
    expect(errors.guests).toBe('At least 1 guest is required.');
  });

  test('returns guests error when guests exceeds 10', () => {
    const errors = validate({ ...validBase, guests: 11 });
    expect(errors.guests).toBe('Maximum 10 guests allowed.');
  });

  test('returns occasion error when occasion is invalid', () => {
    const errors = validate({ ...validBase, occasion: 'Graduation' });
    expect(errors.occasion).toBe('Please select a valid occasion.');
  });

  test('returns no errors for valid input', () => {
    const errors = validate(validBase);
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

// --- Submit button disabled state ---

test('Submit button is disabled when date is empty', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeDisabled();
});

test('Submit button is enabled after a valid date is entered', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2026-03-01' },
  });
  expect(screen.getByRole('button', { name: /confirm reservation/i })).not.toBeDisabled();
});

// --- Inline error messages ---

test('Shows date error message after blurring an empty date field', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  fireEvent.blur(screen.getByLabelText('Choose date'));
  expect(screen.getByRole('alert')).toHaveTextContent('Please select a date.');
});

test('Shows guests error message when guests is set to 0', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: '0' },
  });
  fireEvent.blur(screen.getByLabelText('Number of guests'));
  expect(screen.getByRole('alert')).toHaveTextContent('At least 1 guest is required.');
});

// --- Form submission ---

test('BookingForm can be submitted by the user', () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      onSubmit={handleSubmit}
    />
  );

  // Fill in the required date field with a future date
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
