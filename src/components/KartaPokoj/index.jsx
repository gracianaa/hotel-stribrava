export const KartaPokoj = ({ pokoj }) => {
  return (
    <div className="card">
      <img className="card__image" src={pokoj.img} />
      <div className="card__title">{pokoj.title}</div>
      <div className="card__body">{pokoj.price} Kč na osobu</div>
    </div>
  );
};
