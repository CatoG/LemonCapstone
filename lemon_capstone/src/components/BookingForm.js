import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] ?? '17:00');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ date, time, guests, occasion });
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        required
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input
        id="res-guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="res-occasion">Occasion</label>
      <select
        id="res-occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Confirm reservation</button>
    </form>
  );
}

export default BookingForm;
