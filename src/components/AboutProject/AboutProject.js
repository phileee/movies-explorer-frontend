import './AboutProject.css';
import AboutHeader from '../AboutHeader/AboutHeader';

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject" >
      <AboutHeader title="О проекте" />
      <div className="aboutProject__container">
        <article className="aboutProject__article">
          <h2 className="aboutProject__title">Дипломный проект включал 5 этапов</h2>
          <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="aboutProject__article">
          <h2 className="aboutProject__title">На выполнение диплома ушло 5 недель</h2>
          <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="aboutProject__table">
        <p className="aboutProject__cell">1 неделя</p>
        <p className="aboutProject__cell">4 недели</p>
        <p className="aboutProject__cell">Back-end</p>
        <p className="aboutProject__cell">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
