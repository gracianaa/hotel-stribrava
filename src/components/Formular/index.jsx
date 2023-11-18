import { useEffect, useState } from 'react';
import './style.css';
import dayjs from 'dayjs';

export const Formular = ({ pokoj }) => {
  const [objednavka, setObjednavka] = useState({ pocetOsob: '1' });

  const vypocetCeny = () => {
    const zacatek = dayjs(objednavka.denOd);
    const konec = dayjs(objednavka.denDo);
    const rozdilDni = konec.diff(zacatek, 'day');
    const pocetDni = isNaN(rozdilDni) ? 0 : rozdilDni;

    let cenaJidlo = 0;
    let cenaMazlicek = 0;
    let cenaPristylka = 0;

    if (objednavka.stravovani === 'Snídaně') {
      cenaJidlo = 30;
    } else if (objednavka.stravovani === 'Polopenze') {
      cenaJidlo = 60;
    } else if (objednavka.stravovani === 'Plná penze') {
      cenaJidlo = 100;
    }

    if (objednavka.mazlicek) {
      cenaMazlicek = (pocetDni * pokoj.price) / 4;
    }

    if (objednavka.pristylka) {
      cenaPristylka = (pocetDni * pokoj.price) / 2;
    }

    return (
      pocetDni * pokoj.price * objednavka.pocetOsob +
      cenaJidlo * pocetDni * objednavka.pocetOsob +
      cenaMazlicek +
      cenaPristylka
    );
  };

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setObjednavka((prevObjednavka) => ({
      ...prevObjednavka,
      [id]: newValue,
    }));
  };

  console.log('objednavka', objednavka);

  return (
    <form>
      <div className="form-fields">
        <label name="denOd" htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          min={dayjs().toISOString()}
          onChange={handleChange}
          id="denOd"
          className="field-input"
          type="date"
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          onChange={handleChange}
          id="denDo"
          className="field-input"
          type="date"
        />
        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          onChange={handleChange}
          id="pocetOsob"
          className="field-input"
          type="number"
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select onChange={handleChange} id="stravovani" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          onChange={handleChange}
          id="mazlicek"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          onChange={handleChange}
          id="pristylka"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          onChange={handleChange}
          id="bezbarierovy"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input
          onChange={handleChange}
          id="email"
          className="field-input"
          type="email"
        />

        <label htmlFor="field5" className="field-label">
          Telefon:
        </label>
        <input
          onChange={handleChange}
          id="telefon"
          className="field-input"
          type="tel"
        />
      </div>
      <p>
        Celková cena za pobyt:
        {vypocetCeny()}
        Kč
      </p>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
