const testimonials = [
  {
    id: 1,
    name: 'Sara Lopez',
    details: 'Frequent guest',
    review: 'Great food and lovely atmosphere.',
  },
  {
    id: 2,
    name: 'Jon Doe',
    details: 'Local foodie',
    review: 'Fast service and excellent flavors.',
  },
  {
    id: 3,
    name: 'Rina Patel',
    details: 'Family dinners',
    review: 'Perfect place for family dinners.',
  },
  {
    id: 4,
    name: 'Max Lee',
    details: 'Weekend visitor',
    review: 'My favorite Mediterranean spot.',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What our customers say!</h2>
      <div className="testimonial-grid">
        {testimonials.map((customer) => (
          <article className="testimonial-card" key={customer.id}>
            <p className="stars">★★★★★</p>
            <div className="customer-row">
              <div className="customer-image" aria-hidden="true" />
              <div className="customer-details">
                <p className="name">{customer.name}</p>
                <p className="detail">{customer.details}</p>
              </div>
            </div>
            <p>{customer.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
