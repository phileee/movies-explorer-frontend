import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn, savedMovies, shortSavedMovies, shortsCheckboxSaved, keyWord, handleShortsCheckbox, handleSearchSavedMovies, error, preloader, handleDeleteMovie }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm handleSearchMovies={handleSearchSavedMovies} error={error} shortsCheckbox={shortsCheckboxSaved} keyWord={keyWord} handleShortsCheckbox={handleShortsCheckbox} />
        <div className="movies__line" />
        <MoviesCardList movies={shortsCheckboxSaved ? shortSavedMovies : savedMovies} preloader={preloader} handleToggleLike={handleDeleteMovie} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
