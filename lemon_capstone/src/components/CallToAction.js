import { Link } from 'react-router-dom';
import heroImg from '../images/hero.jpg';

function CallToAction() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Reactive Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link className="hero-cta" to="/reservations" aria-label="On Click">
          Reserve a table
        </Link>
      </div>
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={heroImg}
          alt="Reactive Lemon restaurant dishes"
        />
      </div>
    </section>
  );
}

export default CallToAction;
