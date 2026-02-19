import { Link } from 'react-router-dom';

const specialsData = [
  {
    id: 1,
    title: 'Greek salad',
    price: '$ 12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.',
    imageClass: 'salad',
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    imageClass: 'bruschetta',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
    imageClass: 'dessert',
  },
];

function Specials() {
  return (
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="section-heading">
        <h2 id="specials-title">This Weeks Specials</h2>
        <button type="button">Menu</button>
      </div>

      <div className="card-grid">
        {specialsData.map((special) => (
          <article className="menu-card" key={special.id}>
            <div className={`card-image ${special.imageClass}`} aria-hidden="true" />
            <div className="card-title-row">
              <h3>{special.title}</h3>
              <span>{special.price}</span>
            </div>
            <p>{special.description}</p>
            <Link to="/order-online">Order a delivery</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
