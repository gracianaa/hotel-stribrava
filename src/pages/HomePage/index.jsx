import { Banner } from '../../components/Banner';
import { Pokoje } from '../../components/Pokoje';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Pokoje />
    </div>
  );
};
