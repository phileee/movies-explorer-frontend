import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, deleteCard, handleToggleLike, checkSaved }) {

  const location = useLocation();

  return (
    <article className="moviesCard">
      <div className="moviesCard__info" >
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">{movie.nameRU}</h2>
          <p className="moviesCard__duration">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
        </div>
        <button className={deleteCard ? "moviesCard__delete" : (checkSaved ? "moviesCard__like moviesCard__like_active" : "moviesCard__like")} onClick={() => handleToggleLike(location.pathname === '/saved-movies' ? movie._id : movie)}/>
      </div>
      <a target="_blank" rel="noreferrer" href={movie.trailerLink} ><img className="moviesCard__fragment" alt={movie.nameRU} src={location.pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} /></a>
    </article>
  );
}

export default MoviesCard;
