import mapa from './mapa.png';

export const Kontakt = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>
            Hotel Stříbrava <br />
            Ke Kamenné lávce 12 <br />
            317 24 Libnice nad Stříbravou
          </p>
          <p>
            <a href="mailto:recepce@hotelstribrava.cz">
              recepce@hotelstribrava.cz
            </a>
          </p>
        </div>
        <img src={mapa} />
      </div>
    </section>
  );
};
