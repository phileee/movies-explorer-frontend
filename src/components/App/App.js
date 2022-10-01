import './App.css';

import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main loggedIn={false} />} />
        <Route path='/movies' element={<Movies loggedIn={true} />} />
        <Route path='/saved-movies' element={<SavedMovies loggedIn={true} />} />
        <Route path='/profile' element={<Profile loggedIn={true} />} />
        <Route path='/signin' element={<Register />} />
        <Route path='/signup' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
