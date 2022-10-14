import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <nav className={loggedIn ? "header__links" : "header__links_none"}>
        <Link className="header__link-films" to="/movies" >Фильмы</Link>
        <Link className="header__link-savefilms" to="/saved-movies" >Сохраненные фильмы</Link>
      </nav>
      <Link className={loggedIn ? "header__link-profile" : "header__links_none"} to="/profile" >
        <div className="header__icon"/>
        <p className="header__account">Аккаунт</p>
      </Link>
      <nav className={loggedIn ? "header__links_none" : "header__buttons-sign"}>
        <Link className="header__register" to="/signin" >Регистрация</Link>
        <Link className="header__sign" to="/signup" ><p className="header__sign-text" >Войти</p></Link>
      </nav>
      {loggedIn && <Navigation />}
    </header>
  );
}

export default Header;
