import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" aria-labelledby="confirmed-title">
      <h1 id="confirmed-title">Booking Confirmed!</h1>
      <p>Thank you for your reservation at Little Lemon.</p>
      <p>We look forward to welcoming you. See you soon!</p>
      <Link className="hero-cta" to="/">Back to Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
