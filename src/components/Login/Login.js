import '../Header/Header.css';
import '../Register/Register.css';

import { Link, useNavigate } from 'react-router-dom';

function Login({ onSubmit }) {
  return (
    <form className="form__box" onSubmit={onSubmit} >
      <Link className="header__logo" />
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__subtitle">E-mail</label>
      <input className="form__input" type="email" />
      <span className="form__error"></span>
      <label className="form__subtitle">Пароль</label>
      <input className="form__input" type="password" />
      <span className="form__error"></span>
      <button className="form__login-button" type="submit" onSubmit={onSubmit}>Войти</button>
      <p className="form__link-span">Ещё не зарегистрированы? <Link className="form__link" to="/signin" >Регистрация</Link></p>
    </form>
  );
}

export default Login;