import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, bookingData, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a table</h1>
      <p>Book your table at Reactive Lemon in just a few steps.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
      />

      {bookingData.length > 0 && (
        <section className="bookings-table-section" aria-labelledby="bookings-table-title">
          <h2 id="bookings-table-title">Confirmed Reservations</h2>
          <table className="bookings-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Guests</th>
                <th scope="col">Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}

export default BookingPage;
