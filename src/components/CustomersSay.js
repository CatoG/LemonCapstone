const testimonials = [
  {
    id: 1,
    name: 'Sara Lopez',
    details: 'Frequent guest',
    review: 'Great food and lovely atmosphere.',
    portrait: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Jon Doe',
    details: 'Local foodie',
    review: 'Fast service and excellent flavors.',
    portrait: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Rina Patel',
    details: 'Family dinners',
    review: 'Perfect place for family dinners.',
    portrait: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 4,
    name: 'Max Lee',
    details: 'Weekend visitor',
    review: 'My favorite Mediterranean spot.',
    portrait: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What our customers say!</h2>
      <div className="testimonial-grid">
        {testimonials.map((customer) => (
          <article className="testimonial-card" key={customer.id}>
            <p className="stars" aria-label="Rated 5 out of 5 stars">★★★★★</p>
            <div className="customer-row">
              <img
                className="customer-image"
                src={customer.portrait}
                alt={customer.name}
                width="38"
                height="38"
              />
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
