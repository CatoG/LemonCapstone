import family1930Img from '../images/family-1930.jpg';
import family2020Img from '../images/family-2020.jpg';

function Chicago() {
  return (
    <section className="chicago-section" aria-labelledby="chicago-title">
      <div className="chicago-copy">
        <h2 id="chicago-title">Reactive Lemon Chicago</h2>
        <h3>Family owned for two generations</h3>
        <p>
          Reactive Lemon started as a small neighborhood kitchen where two
          brothers shared classic Mediterranean recipes with their community.
        </p>
        <p>
          Today, we continue that story in Chicago with seasonal ingredients,
          welcoming service, and dishes made to bring people together.
        </p>
      </div>
      <div className="chicago-images" aria-hidden="true">
        <img
          className="chicago-image-large"
          src={family2020Img}
          alt="Reactive Lemon family in 2020"
        />
        <img
          className="chicago-image-small"
          src={family1930Img}
          alt="Reactive Lemon family in 1930"
        />
      </div>
    </section>
  );
}

export default Chicago;
