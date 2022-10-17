import '../Header/Header.css';
import './Register.css';

import React from "react";
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/UseFormWithValidation';

function Register({ error, handleSignup }) {

  const inputValidation = useFormWithValidation();
  const { name, email, password } = inputValidation.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = inputValidation.values;
    handleSignup(name, email, password);
    inputValidation.resetForm();
  }

  return (
    <form className="form__box" onSubmit={handleSubmit} >
      <Link className="header__logo" to="/" />
      <h2 className="form__title">Добро пожаловать!</h2>
      <label className="form__subtitle">Имя</label>
      <input className="form__input" type="name" name="name" id="name" value={inputValidation?.values?.name || ''} onChange={inputValidation.handleChange} minLength="2" maxLength="30" required />
      <span className="form__error">{name}</span>
      <label className="form__subtitle">E-mail</label>
      <input className="form__input" type="email" name="email" id="email" value={inputValidation?.values?.email || ''} onChange={inputValidation.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
      <span className="form__error">{email}</span>
      <label className="form__subtitle">Пароль</label>
      <input className="form__input" type="password" name="password" id="password" value={inputValidation?.values?.password || ''} onChange={inputValidation.handleChange} required />
      <span className="form__error">{password}</span>
      <span className="form__error">{error}</span>
      <button className={!inputValidation.isValid ? "form__register-button form__button_disabled" : "form__register-button"} type="submit" onSubmit={handleSubmit} disabled={!inputValidation.isValid && 'disabled'} >Зарегистрироваться</button>
      <p className="form__link-span">Уже зарегистрированы? <Link className="form__link" to="/signin" >Войти</Link></p>
    </form>
  );
}

export default Register;
