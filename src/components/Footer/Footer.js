import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__year">© 2022</p>
        <div className="footer__links">
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/" >Яндекс.Практикум</a>
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/phileee" >Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
