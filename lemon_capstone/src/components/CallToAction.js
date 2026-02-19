import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link className="hero-cta" to="/reservations">
          Reserve a table
        </Link>
      </div>
      <div className="hero-image" aria-hidden="true" />
    </section>
  );
}

export default CallToAction;
