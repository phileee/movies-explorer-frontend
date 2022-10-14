import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ loggedIn, shortsCheckbox, keyWord, moviesAfterSearch, shortMoviesAfterSearch, handleSearchMovies, handleShortsCheckbox, preloader, error, countMovies, handleMoreMovies, handleToggleLike, checkSaved }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm handleSearchMovies={handleSearchMovies} error={error} shortsCheckbox={shortsCheckbox} keyWord={keyWord} handleShortsCheckbox={handleShortsCheckbox} />
        <div className="movies__line" />
        <MoviesCardList movies={shortsCheckbox ? shortMoviesAfterSearch : moviesAfterSearch} preloader={preloader} countMovies={countMovies} handleMoreMovies={handleMoreMovies} handleToggleLike={handleToggleLike} checkSaved={checkSaved} />
        {!shortsCheckbox && moviesAfterSearch && countMovies < moviesAfterSearch.length && <button className="movies__addButton" onClick={handleMoreMovies} >Ещё</button>}
        {shortsCheckbox && shortMoviesAfterSearch && countMovies < shortMoviesAfterSearch.length && <button className="movies__addButton" onClick={handleMoreMovies} >Ещё</button>}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
