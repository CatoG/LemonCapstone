import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link className="hero-cta" to="/reservations" aria-label="On Click">
          Reserve a table
        </Link>
      </div>
      <div className="hero-image" aria-hidden="true" />
    </section>
  );
}

export default CallToAction;
