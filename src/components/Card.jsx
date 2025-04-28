export default function Card({card, onCardClick, onCardLike, onCardDelete}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='gallery__item'>

      <div className='gallery__info'>
        <h2 className='gallery__title'>{card.name}</h2>
      </div>
      <img
        className='gallery__photo'
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
    </li>
  );
}
