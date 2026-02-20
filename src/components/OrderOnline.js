import { Link } from 'react-router-dom';

function OrderOnline() {
  return (
    <section className="stub-page" aria-labelledby="order-title">
      <h1 id="order-title">Order Online</h1>
      <p>
        Online ordering is coming soon! In the meantime, call us at{' '}
        <a href="tel:+15551234567">(555) 123-4567</a> to place a takeaway
        order, or{' '}
        <Link to="/reservations">reserve a table</Link> to dine in.
      </p>
    </section>
  );
}

export default OrderOnline;
