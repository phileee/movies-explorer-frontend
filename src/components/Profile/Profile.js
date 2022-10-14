import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useState } from "react";
import useFormWithValidation from '../../utils/UseFormWithValidation';

function Profile({ loggedIn, handleExit, handleUpdateUser, error }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [matchValues, setMatchValues] = useState(true);
  const [valid, setValid] = useState(false);

  const inputValidation = useFormWithValidation();
  const { name, email } = inputValidation.errors;

  React.useEffect(() => {
    if (inputValidation.values.name === currentUser.name && inputValidation.values.email === currentUser.email) {
      setMatchValues(false);
    } else {
      setMatchValues(true);
    }
  }, [inputValidation.values.name, inputValidation.values.email, currentUser]);

  React.useEffect(() => {
    setValid(inputValidation.isValid && matchValues)
  }, [matchValues, inputValidation.isValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = inputValidation.values;
    console.log(name, email)
    handleUpdateUser(name, email);
    inputValidation.resetForm();
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <section className="profile__box">
          <h2 className="profile__hello">Привет, {currentUser.name}!</h2>
          <form className="profile__form">
            <label className="profile__string">
              <h3 className="profile__title">Имя</h3>
              <input className="profile__input" placeholder={currentUser.name} type="name" name="name" id="name" value={inputValidation?.values?.name || ''} onChange={inputValidation.handleChange} minLength="2" maxLength="30" required />
            </label>
            <div className="profile__line" />
            <label className="profile__string">
              <h3 className="profile__title">E-mail</h3>
              <input className="profile__input" placeholder={currentUser.email} type="email" name="email" value={inputValidation?.values?.email || ''} onChange={inputValidation.handleChange} required />
            </label>
          </form>
          <span className="profile__error">{name}</span>
          <span className="profile__error">{email}</span>
          <span className="profile__error">{error}</span>
          <div className="profile__buttons">
            <button className="profile__edit" disabled={(!valid && 'disabled')} onClick={handleSubmit} >Редактировать</button>
            <button className="profile__exit" onClick={handleExit} >Выйти из аккаунта</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
