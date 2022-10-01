import '../Header/Header.css';
import './Register.css';

import { Link, useNavigate } from 'react-router-dom';

function Register({ onSubmit }) {
  return (
    <form className="form__box" onSubmit={onSubmit} >
      <Link className="header__logo" to="/" />
      <h2 className="form__title">Добро пожаловать!</h2>
      <label className="form__subtitle">Имя</label>
      <input className="form__input" type="text" />
      <span className="form__error"></span>
      <label className="form__subtitle">E-mail</label>
      <input className="form__input" type="email" />
      <span className="form__error"></span>
      <label className="form__subtitle">Пароль</label>
      <input className="form__input" type="password" />
      <span className="form__error">Что-то пошло не так...</span>
      <button className="form__register-button" type="submit" onSubmit={onSubmit}>Зарегистрироваться</button>
      <p className="form__link-span">Уже зарегистрированы? <Link className="form__link" to="/signup" >Войти</Link></p>
    </form>
  );
}

export default Register;
