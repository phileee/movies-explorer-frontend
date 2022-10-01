import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn }) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div className="movies__line" />
      <MoviesCardList deleteCard={true} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
