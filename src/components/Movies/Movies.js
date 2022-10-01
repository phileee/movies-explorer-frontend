import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ loggedIn }) {

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div className="movies__line" />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
