const menuData = [
  {
    category: 'Starters',
    items: [
      { name: 'Greek Salad', price: '$12.99', description: 'Crispy lettuce, peppers, olives and Chicago-style feta.' },
      { name: 'Bruschetta', price: '$5.99', description: 'Grilled bread with garlic, salt and olive oil.' },
    ],
  },
  {
    category: 'Mains',
    items: [
      { name: 'Grilled Sea Bass', price: '$24.99', description: 'Mediterranean herbs, lemon butter, seasonal vegetables.' },
      { name: 'Lamb Kofta', price: '$19.99', description: 'Spiced minced lamb, yoghurt sauce, warm flatbread.' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Lemon Dessert', price: '$5.00', description: "Grandma's recipe — authentic and unforgettable." },
      { name: 'Baklava', price: '$4.50', description: 'Layered filo pastry with honey and crushed pistachios.' },
    ],
  },
];

function Menu() {
  return (
    <section className="stub-page" aria-labelledby="menu-title">
      <h1 id="menu-title">Our Menu</h1>
      {menuData.map((section) => (
        <section key={section.category} aria-labelledby={`menu-${section.category}`}>
          <h2 id={`menu-${section.category}`}>{section.category}</h2>
          <ul className="menu-list">
            {section.items.map((item) => (
              <li key={item.name} className="menu-list-item">
                <div className="menu-list-header">
                  <span className="menu-list-name">{item.name}</span>
                  <span className="menu-list-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

export default Menu;
