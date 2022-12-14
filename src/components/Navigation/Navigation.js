import './Navigation.css';
import '../Header/Header.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {

  const location = useLocation();

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <div className={isVisible ? "navigation navigation__open" : "navigation"}>
        <div className="navigation__exit" onClick={() => setIsVisible(false)} />
        <div className="navigation__menu">
          <nav className="navigation__container">
            <Link className="navigation__link" to="/">Главная</Link>
            <Link className={location.pathname === '/movies' ? "navigation__link navigation__link_active" : "navigation__link"} to="/movies">Фильмы</Link>
            <Link className={location.pathname === '/saved-movies' ? "navigation__link navigation__link_active" : "navigation__link"} to="/saved-movies" >Сохраненные фильмы</Link>
          </nav>
          <Link className="navigation__link-profile" to="/profile">
            <div className="header__icon" />
            <p className="header__account">Аккаунт</p>
          </Link>
        </div>
      </div>
      <div className="navigation__button" onClick={() => setIsVisible(true)} />
    </>
  );
}

export default Navigation;
