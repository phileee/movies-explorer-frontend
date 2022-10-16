import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import React from "react";
import { useLocation } from 'react-router-dom';

function SavedMovies({ setSavedMovies, setShortSavedMovies, setShortsCheckboxSaved, loggedIn, savedMovies, shortSavedMovies, shortsCheckboxSaved, keyWord, handleShortsCheckbox, handleSearchSavedMovies, error, preloader, handleToggleLike }) {

  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setSavedMovies(JSON.parse(localStorage.getItem('localSavedMovies')));
      setShortSavedMovies(JSON.parse(localStorage.getItem('shortLocalSavedMovies')));
      setShortsCheckboxSaved(false);
    }
  }, [location]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm handleSearchMovies={handleSearchSavedMovies} error={error} shortsCheckboxSaved={shortsCheckboxSaved} keyWord={keyWord} handleShortsCheckbox={handleShortsCheckbox} />
        <div className="movies__line" />
        <MoviesCardList movies={shortsCheckboxSaved ? shortSavedMovies : savedMovies} preloader={preloader} handleToggleLike={handleToggleLike} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
