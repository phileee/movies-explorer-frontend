import '../Header/Header.css';
import '../Register/Register.css';

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useFormWithValidation from '../../utils/UseFormWithValidation';

import * as api from '../../utils/MainApi';

function Login({ setLoggedIn }) {

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const inputValidation = useFormWithValidation();
  const { email, password } = inputValidation.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputValidation.values;

    api.signin(email, password)
      .then((res) => {
        if (res.status === 400 || res.status === 401) {
          setMessage('Некорректные данные, попробуйте повторить запрос');
          return Promise.reject(`Ошибка: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then(() => {
        inputValidation.resetForm();
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => setMessage(''), 8000);
      })
  }

  return (
    <form className="form__box" onSubmit={handleSubmit} >
      <Link className="header__logo" />
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__subtitle">E-mail</label>
      <input className="form__input" type="email" name="email" id="email" value={inputValidation?.values?.email || ''} onChange={inputValidation.handleChange} required />
      <span className="form__error">{email}</span>
      <label className="form__subtitle">Пароль</label>
      <input className="form__input" type="password" name="password" id="password" value={inputValidation?.values?.password || ''} onChange={inputValidation.handleChange} required />
      <span className="form__error">{password}</span>
      <span className="form__error">{message}</span>
      <button className={!inputValidation.isValid ? "form__register-button form__button_disabled" : "form__register-button"} type="submit" onSubmit={handleSubmit} disabled={!inputValidation.isValid && 'disabled'} >Войти</button>
      <p className="form__link-span">Ещё не зарегистрированы? <Link className="form__link" to="/signup" >Регистрация</Link></p>
    </form>
  );
}

export default Login;