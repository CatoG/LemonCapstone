import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a table</h1>
      <p>Book your table at Little Lemon in just a few steps.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
  );
}

export default BookingPage;
