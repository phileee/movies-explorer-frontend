import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, preloader, countMovies, handleToggleLike, checkSaved}) {

  const location = useLocation();

  return (
    <section className="moviesCardList">
      {preloader && <Preloader />}

      {location.pathname === '/movies' && movies &&  movies.slice(0, countMovies).map((movie) => {
        const checkedSaved = checkSaved(movie);
        return (
          <MoviesCard movie={movie} key={movie.id} handleToggleLike={handleToggleLike} checkSaved={checkedSaved} />
        )
      })}

      {location.pathname === '/saved-movies' && movies && movies.map((movie) => (
        <MoviesCard movie={movie} key={movie._id} deleteCard={true} handleToggleLike={handleToggleLike} />
      ))}
    </section>
  );
}

export default MoviesCardList;
