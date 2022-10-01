import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <article className="portfolio__container">
        <p className="portfolio__title">Статичный сайт</p>
        <Link className="portfolio__link" to="https://code.s3.yandex.net/web-developer/final-projects/project-1/index.html" />
      </article>
      <div className="portfolio__line" />
      <article className="portfolio__container">
        <p className="portfolio__title">Адаптивный сайт</p>
        <Link className="portfolio__link" to="https://phileee.github.io/russian-travel/" />
      </article>
      <div className="portfolio__line" />
      <article className="portfolio__container">
        <p className="portfolio__title">Одностраничное приложение</p>
        <Link className="portfolio__link" to="https://github.com/phileee/react-mesto-api-full" />
      </article>
    </section>
  );
}

export default Portfolio;
