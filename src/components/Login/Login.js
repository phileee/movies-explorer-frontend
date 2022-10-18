import '../Header/Header.css';
import '../Register/Register.css';

import React from "react";
import { Link} from 'react-router-dom';
import useFormWithValidation from '../../utils/UseFormWithValidation';

function Login({ error, handleSignin }) {

  const inputValidation = useFormWithValidation();
  const { email, password } = inputValidation.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputValidation.values;
    handleSignin(email, password);
    inputValidation.resetForm();
  }

  return (
    <form className="form__box" onSubmit={handleSubmit} >
      <Link className="header__logo" to="/" />
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__subtitle">E-mail</label>
      <input className="form__input" type="email" name="email" id="email" value={inputValidation?.values?.email || ''} onChange={inputValidation.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
      <span className="form__error">{email}</span>
      <label className="form__subtitle">Пароль</label>
      <input className="form__input" type="password" name="password" id="password" value={inputValidation?.values?.password || ''} onChange={inputValidation.handleChange} required />
      <span className="form__error">{password}</span>
      <span className="form__error">{error}</span>
      <button className={!inputValidation.isValid ? "form__register-button form__button_disabled" : "form__register-button"} type="submit" onSubmit={handleSubmit} disabled={!inputValidation.isValid && 'disabled'} >Войти</button>
      <p className="form__link-span">Ещё не зарегистрированы? <Link className="form__link" to="/signup" >Регистрация</Link></p>
    </form>
  );
}

export default Login;