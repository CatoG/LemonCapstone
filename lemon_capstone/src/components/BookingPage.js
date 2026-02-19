function BookingPage() {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a table</h1>
      <p>Book your table at Little Lemon in just a few steps.</p>

      <form className="booking-form">
        <label htmlFor="booking-date">Date</label>
        <input id="booking-date" name="date" type="date" required />

        <label htmlFor="booking-time">Time</label>
        <select id="booking-time" name="time" defaultValue="17:00">
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>

        <label htmlFor="booking-guests">Number of guests</label>
        <input
          id="booking-guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          defaultValue="2"
        />

        <label htmlFor="booking-occasion">Occasion</label>
        <select id="booking-occasion" name="occasion" defaultValue="Birthday">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit">Confirm reservation</button>
      </form>
    </section>
  );
}

export default BookingPage;
