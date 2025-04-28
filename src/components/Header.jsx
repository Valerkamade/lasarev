import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className='header page__header'>
      <img className='header__logo' src={logo} alt='Московский зоопарк'/>
      <div className='header__wrapper'>
        <h1 className='header__title'>Лазарев Пётр Герасимович</h1>
        <p className='header__description'>18.03.1909-08.09.1942гг.</p>
        <h2 className='header__description'>Гвардии сержант</h2>
      </div>
    </header>
  );
}
