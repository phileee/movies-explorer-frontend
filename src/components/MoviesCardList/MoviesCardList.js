import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movie, deleteCard }) {

  return (
    <section className="moviesCardList">
      {/* {movies.map((movie) => (
            <MoviesCard card={movie} key={movie._id} />
          ))}; */}

      <MoviesCard isLiked={true} deleteCard={deleteCard} />
      <MoviesCard isLiked={false} deleteCard={deleteCard} />
      {/* <Preloader /> */}
      <button className="moviesCardList__addButton" >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
