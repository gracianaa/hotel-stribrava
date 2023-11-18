import { Banner } from '../../components/Banner';
import { Kontakt } from '../../components/Kontakt';
import { Pokoje } from '../../components/Pokoje';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Pokoje />
      <Kontakt />
    </div>
  );
};
