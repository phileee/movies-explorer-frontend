import './Promo.css';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';

function Promo({loggedIn}) {
  return (
    <section className="promo">
      <Header loggedIn={loggedIn} />
      <div className="promo__container">
        <div className="promo__info">
          <h2 className="promo__title">Учебный проект студента факультета Веб-разработки.</h2>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link" href="#aboutProject" ><p className="promo__link-text" >Узнать больше</p></a>
        </div>
        <div className="promo__logo" />
      </div>
    </section>
  );
}

export default Promo;
