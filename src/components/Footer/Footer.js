import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__year">© 2022</p>
        <div className="footer__links">
          <Link className="footer__link" to="https://practicum.yandex.ru/" >Яндекс.Практикум</Link>
          <Link className="footer__link" to="https://github.com/phileee" >Github</Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
