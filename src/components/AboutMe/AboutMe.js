import './AboutMe.css';
import AboutHeader from "../AboutHeader/AboutHeader";
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="aboutMe">
      <AboutHeader title="Студент" />
      <div className="aboutMe__container">
        <article className="aboutMe__info">
          <h2 className="aboutMe__name">Виталий</h2>
          <p className="aboutMe__subname">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className="aboutMe__github" to="https://github.com/phileee" >Github</Link>
        </article>
        <div className="aboutMe__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
