import './MoviesCard.css';

function MoviesCard({ movie, isLiked, deleteCard }) {
  return (
    <article className="moviesCard">
      <div className="moviesCard__info" >
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">33 слова о дизайне</h2>
          <p className="moviesCard__duration">1ч 42м</p>
        </div>
        <div className={deleteCard ? "moviesCard__delete" : (isLiked ? "moviesCard__like moviesCard__like_active" : "moviesCard__like")} />
      </div>
      <img className="moviesCard__fragment" alt="" src="https://icdn.lenta.ru/images/2017/12/25/09/20171225091333068/detail_35d9248a97f38d7047d853e55ba83633.jpg" />
    </article>
  );
}

export default MoviesCard;
