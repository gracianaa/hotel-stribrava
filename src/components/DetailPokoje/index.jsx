import { Formular } from '../Formular';
import './style.css';
export const DetailPokoje = ({ pokoj }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {pokoj.title}, {pokoj.price}Kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={pokoj.img} />
            <p>{pokoj.description}</p>
          </div>
          <Formular pokoj={pokoj} />
        </div>
      </div>
    </section>
  );
};
