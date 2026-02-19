import { useState } from 'react';

const todayString = () => new Date().toISOString().split('T')[0];

const VALID_OCCASIONS = ['Birthday', 'Anniversary'];

export function validate({ date, time, guests, occasion, availableTimes }) {
  const errors = {};

  if (!date) {
    errors.date = 'Please select a date.';
  } else if (date < todayString()) {
    errors.date = 'Date must not be in the past.';
  }

  if (!time) {
    errors.time = 'Please select a time.';
  } else if (Array.isArray(availableTimes) && availableTimes.length > 0 && !availableTimes.includes(time)) {
    errors.time = 'Selected time is not available for this date.';
  }

  const guestCount = Number(guests);
  if (!guests && guests !== 0) {
    errors.guests = 'Number of guests is required.';
  } else if (guestCount < 1) {
    errors.guests = 'At least 1 guest is required.';
  } else if (guestCount > 10) {
    errors.guests = 'Maximum 10 guests allowed.';
  }

  if (!occasion) {
    errors.occasion = 'Please select an occasion.';
  } else if (!VALID_OCCASIONS.includes(occasion)) {
    errors.occasion = 'Please select a valid occasion.';
  }

  return errors;
}

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] ?? '17:00');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({});

  const errors = validate({ date, time, guests, occasion, availableTimes });
  const isFormValid = Object.keys(errors).length === 0;

  const handleBlur = (field) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all validated fields as touched so errors become visible
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!isFormValid) return;

    if (onSubmit) {
      const success = onSubmit({ date, time, guests, occasion });
      if (success !== false) {
        setDate('');
        setTime(availableTimes[0] ?? '17:00');
        setGuests(2);
        setOccasion('Birthday');
        setTouched({});
      }
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setTouched((prev) => ({ ...prev, date: true }));
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        required
        min={todayString()}
        value={date}
        onChange={handleDateChange}
        onBlur={() => handleBlur('date')}
        aria-invalid={touched.date && !!errors.date}
        aria-describedby={touched.date && errors.date ? 'date-error' : undefined}
      />
      {touched.date && errors.date && (
        <span id="date-error" className="field-error" role="alert">
          {errors.date}
        </span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setTouched((prev) => ({ ...prev, time: true }));
        }}
        onBlur={() => handleBlur('time')}
        aria-invalid={touched.time && !!errors.time}
        aria-describedby={touched.time && errors.time ? 'time-error' : undefined}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {touched.time && errors.time && (
        <span id="time-error" className="field-error" role="alert">
          {errors.time}
        </span>
      )}

      <label htmlFor="res-guests">Number of guests</label>
      <input
        id="res-guests"
        type="number"
        required
        min="1"
        max="10"
        value={guests}
        onChange={(e) => {
          setGuests(Number(e.target.value));
          setTouched((prev) => ({ ...prev, guests: true }));
        }}
        onBlur={() => handleBlur('guests')}
        aria-invalid={touched.guests && !!errors.guests}
        aria-describedby={touched.guests && errors.guests ? 'guests-error' : undefined}
      />
      {touched.guests && errors.guests && (
        <span id="guests-error" className="field-error" role="alert">
          {errors.guests}
        </span>
      )}

      <label htmlFor="res-occasion">Occasion</label>
      <select
        id="res-occasion"
        required
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          setTouched((prev) => ({ ...prev, occasion: true }));
        }}
        onBlur={() => handleBlur('occasion')}
        aria-invalid={touched.occasion && !!errors.occasion}
        aria-describedby={touched.occasion && errors.occasion ? 'occasion-error' : undefined}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {touched.occasion && errors.occasion && (
        <span id="occasion-error" className="field-error" role="alert">
          {errors.occasion}
        </span>
      )}

      <button type="submit" disabled={!isFormValid}>
        Confirm reservation
      </button>
    </form>
  );
}

export default BookingForm;
