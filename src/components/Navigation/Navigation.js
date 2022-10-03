import './Navigation.css';
import '../Header/Header.css';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <div className={isVisible ? "navigation navigation__open" : "navigation"}>
        <div className="navigation__exit" onClick={() => setIsVisible(false)} />
        <dib className="navigation__menu">
          <nav className="navigation__container">
            <Link className="navigation__link" to="/">Главная</Link>
            <Link className="navigation__link" to="/movies">Фильмы</Link>
            <Link className="navigation__link" to="/saved-movies" >Сохраненные фильмы</Link>
          </nav>
          <Link className="navigation__link-profile" to="/profile">
            <div className="header__icon" />
            <p className="header__account">Аккаунт</p>
          </Link>
        </dib>
      </div>
      <div className="navigation__button" onClick={() => setIsVisible(true)} />
    </>
  );
}

export default Navigation;
