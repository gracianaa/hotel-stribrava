import { useEffect, useState } from 'react';
import { KartaPokoj } from '../KartaPokoj';
import './style.css';
import { DetailPokoje } from '../DetailPokoje';

export const Pokoje = () => {
  const [pokoje, setPokoje] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch('http://localhost:4000/api/pokoje');
      const data = await response.json();
      setPokoje(data.result);
    };

    handleFetch();
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše Pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {pokoje.map((pokoj) => (
            <KartaPokoj pokoj={pokoj} onDetail={setDetail} />
          ))}
        </div>
      </div>
      {detail === null ? null : <DetailPokoje pokoj={detail} />}
    </section>
  );
};
