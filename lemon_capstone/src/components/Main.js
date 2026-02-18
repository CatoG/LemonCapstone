function Main() {
  return (
    <main aria-label="Main content">
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button type="button">Reserve a table</button>
        </div>
        <div className="hero-image" aria-hidden="true" />
      </section>

      <section className="specials-section">
        <div className="section-heading">
          <h2>This Weeks Specials</h2>
          <button type="button">Menu</button>
        </div>
        <div className="card-grid">
          <article className="menu-card">
            <div className="card-image salad" aria-hidden="true" />
            <div className="card-title-row">
              <h3>Greek salad</h3>
              <span>$ 12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese.
            </p>
            <a href="/order-online">Order a delivery</a>
          </article>

          <article className="menu-card">
            <div className="card-image bruschetta" aria-hidden="true" />
            <div className="card-title-row">
              <h3>Bruschetta</h3>
              <span>$ 5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="/order-online">Order a delivery</a>
          </article>

          <article className="menu-card">
            <div className="card-image dessert" aria-hidden="true" />
            <div className="card-title-row">
              <h3>Lemon Dessert</h3>
              <span>$ 5.00</span>
            </div>
            <p>
              This comes straight from grandma&apos;s recipe book, every last
              ingredient has been sourced and is as authentic as can be.
            </p>
            <a href="/order-online">Order a delivery</a>
          </article>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What our customers say!</h2>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p className="name">Sara Lopez</p>
            <p>Great food and lovely atmosphere.</p>
          </article>
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p className="name">Jon Doe</p>
            <p>Fast service and excellent flavors.</p>
          </article>
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p className="name">Rina Patel</p>
            <p>Perfect place for family dinners.</p>
          </article>
          <article className="testimonial-card">
            <p className="stars">★★★★★</p>
            <p className="name">Max Lee</p>
            <p>My favorite Mediterranean spot.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;