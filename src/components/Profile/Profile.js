import './Profile.css';
import Header from '../Header/Header';


function Profile({loggedIn}) {
  return (
    <div className="profile">
      <Header loggedIn={loggedIn} />
      <section className="profile__box">
        <h2 className="profile__hello">Привет, Виталий!</h2>
        <form className="profile__form">
          <label className="profile__string">
            <h3 className="profile__title">Имя</h3>
            <input className="profile__input" type="text" name="name" value="Виталий" disabled />
          </label>
          <div className="profile__line" />
          <label className="profile__string">
            <h3 className="profile__title">E-mail</h3>
            <input className="profile__input" type="email" name="email" value="pochta@yandex.ru" disabled />
          </label>
        </form>
        <div className="profile__buttons">
          <button className="profile__edit">Редактировать</button>
          <button className="profile__exit">Выйти из аккаунта</button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
