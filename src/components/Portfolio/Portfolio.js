import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__container" target="_blank" rel="noreferrer" href="https://code.s3.yandex.net/web-developer/final-projects/project-1/index.html">
            <p className="portfolio__title">Статичный сайт</p>
            <div className="portfolio__link" />
          </a>
          <div className="portfolio__line" />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__container" target="_blank" rel="noreferrer" href="https://phileee.github.io/russian-travel">
            <p className="portfolio__title">Адаптивный сайт</p>
            <div className="portfolio__link" />
          </a>
          <div className="portfolio__line" />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__container" target="_blank" rel="noreferrer" href="https://github.com/phileee/react-mesto-api-full">
            <p className="portfolio__title">Одностраничное приложение</p>
            <div className="portfolio__link" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
