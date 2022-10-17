import './App.css';

import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import * as api from '../../utils/MainApi';
import * as movieApi from '../../utils/MoviesApi';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: '',
  });

  const [error, setError] = React.useState('');
  const [preloader, setPreloader] = React.useState(false);

  const [shortsCheckbox, setShortsCheckbox] = React.useState(false);
  const [shortsCheckboxSaved, setShortsCheckboxSaved] = React.useState(false);

  const [countMovies, setCountMovies] = React.useState(5);
  const [moviesToLoad, setMoviesToLoad] = React.useState(2);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const [moviesAfterSearch, setMoviesAfterSearch] = React.useState([]);
  const [shortMoviesAfterSearch, setShortMoviesAfterSearch] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shortSavedMovies, setShortSavedMovies] = React.useState([]);

  const clearError = () => { setTimeout(() => setError(''), 5000) };

  const verificationToken = () => {
    
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getUser(jwt)
        .then((res) => {
          if (res.status === 401) {
            setLoggedIn(false);
            throw new Error('Нет прав')
          } else {
            return res;
          }
        })
        .then((res) => {
          setCurrentUser(res)
          setLoggedIn(true);
        })
        .then(() => {
          getSavedMovies();
        })
        .then(() => {
          navigate(location.pathname);
        })
        .catch(err => {
          localStorage.clear();
          setLoggedIn(false);
          navigate('/signin');
          setShortsCheckbox(false);
          setShortsCheckboxSaved(false);
          setMoviesAfterSearch([]);
          setShortMoviesAfterSearch([]);
          setSavedMovies([]);
          setShortSavedMovies([]);
          setCurrentUser({
            name: '',
            email: '',
            _id: '',
          });
          console.log(err)
        });
    }

    if (localStorage.getItem('shortsCheckbox') === 'true') {
      setShortsCheckbox(true);
    } else {
      setShortsCheckbox(false);
    };

    if (localStorage.getItem('shortsCheckboxSaved') === 'true') {
      setShortsCheckboxSaved(true);
    } else {
      setShortsCheckboxSaved(false);
    };

    setMoviesAfterSearch(JSON.parse(localStorage.getItem('movieAfterSearch')));
    setShortMoviesAfterSearch(JSON.parse(localStorage.getItem('shortMovieAfterSearch')));
  }, [])

  React.useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (location.pathname === '/movies') {
      if (windowWidth <= 480) {
        setCountMovies(5);
        setMoviesToLoad(5);
      } else if (windowWidth < 1280 && windowWidth > 480) {
        setCountMovies(6);
        setMoviesToLoad(6);
      } else if (windowWidth >= 1280) {
        setCountMovies(7);
        setMoviesToLoad(7);
      };
    };
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, [windowWidth, location]);

  const handleSignup = (name, email, password) => {
    api.signup(name, email, password)
      .then((res) => {
        if (res.status === 400 || res.status === 401 || res.status === 409) {
          setError('Некорректные данные, попробуйте повторить запрос');
          return Promise.reject(`Ошибка: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then(() => {
        handleSignin(email, password)
      })
      .catch(err => console.log(err))
      .finally(() => {
        clearError();
      })
  }

  const handleSignin = (email, password) => {
    api.signin(email, password)
      .then((res) => {
        if (res.status === 400 || res.status === 401) {
          setError('Некорректные данные, попробуйте повторить запрос');
          return Promise.reject(`Ошибка: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        api.getUser(res.token)
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res));;
            setCurrentUser({
              name: res.name,
              email: res.email,
              _id: res._id,
            })
            getSavedMovies();
          })
          .then(() => {
            setLoggedIn(true);
            navigate('/movies');
          })
          .catch((err) => {
            setError('Некорректные данные, попробуйте повторить запрос');
            console.log(err);
          })
      })
      .catch(err => console.log(err))
      .finally(() => {
        clearError();
      })
  }


  const handleSearchMovies = (keyWord) => {
    setPreloader(true)
    if (!localStorage.getItem('localMovies')) {
      movieApi.getMovies()
        .then((movies) => {
          localStorage.setItem('localMovies', JSON.stringify(movies));
        })
        .then(() => {
          searchLocalMovies(keyWord)
        })
        .catch((err) => {
          setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.log(err);
        })
        .finally(() => {
          setPreloader(false);
          setError('');
        })
    } else {
      setPreloader(true)
      searchLocalMovies(keyWord);
      setPreloader(false);
    }
  };

  const searchLocalMovies = (keyWord) => {
    localStorage.setItem('keyWord', keyWord);
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('localMovies'));
    const moviesAfterSearch = moviesFromLocalStorage.filter(movie => movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
    setMoviesAfterSearch(moviesAfterSearch);
    localStorage.setItem('movieAfterSearch', JSON.stringify(moviesAfterSearch));
    const shortMoviesAfterSearch = moviesAfterSearch.filter(film => film.duration <= 40);
    localStorage.setItem('shortMoviesAfterSearch', JSON.stringify(shortMoviesAfterSearch));
    setShortMoviesAfterSearch(shortMoviesAfterSearch);
    if ((location.pathname === '/movies' && moviesAfterSearch.length === 0) || (location.pathname === '/movies' && shortsCheckbox && shortMoviesAfterSearch.length === 0)) {
      setError('Ничего не найдено');
    }
    clearError();
  }

  const handleMoreMovies = () => {
    setCountMovies(countMovies + moviesToLoad);
  };

  const handleShortsCheckbox = (keyWord) => {
    if (keyWord && location.pathname === '/movies') {
      localStorage.setItem('shortsCheckbox', !shortsCheckbox);
      setShortsCheckbox(!shortsCheckbox);
      handleSearchMovies(keyWord);
    } else if (keyWord && location.pathname === '/saved-movies') {
      localStorage.setItem('shortsCheckboxSaved', !shortsCheckboxSaved);
      setShortsCheckboxSaved(!shortsCheckboxSaved);
      handleSearchSavedMovies(keyWord);
    } else {
      setError('Нужно ввести ключевое слово');
      clearError();
    }
  };

  const handleSearchSavedMovies = (keyWord) => {
    setPreloader(true);
    setError('');
    localStorage.setItem('keyWordSaved', keyWord);
    const savedMovieFromLocalStorage = JSON.parse(localStorage.getItem('localSavedMovies'));
    const savedMovieAfterSearch = savedMovieFromLocalStorage.filter(film => film.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
    setSavedMovies(savedMovieAfterSearch);
    const shortSavedMovieAfterSearch = savedMovieAfterSearch.filter(film => film.duration <= 40);
    setShortSavedMovies(shortSavedMovieAfterSearch);
    if ((location.pathname === '/saved-movies' && savedMovieAfterSearch.length === 0) || (location.pathname === '/saved-movies' && shortsCheckboxSaved && shortSavedMovieAfterSearch.length === 0)) {
      setError('Ничего не найдено');
    }
    setPreloader(false);
    clearError();
  }

  const getSavedMovies = () => {
    api.getMovie()
      .then((savedMovies) => {
        localStorage.setItem('localSavedMovies', JSON.stringify(savedMovies));
        setSavedMovies(savedMovies);
        const shortSavedMovies = savedMovies.filter(film => film.duration <= 40);
        localStorage.setItem('shortLocalSavedMovies', JSON.stringify(shortSavedMovies));
        setShortSavedMovies(shortSavedMovies);
      })
      .catch((err) => console.log(err));
  }

  const checkMovieLink = (movie) => {
    let fixedMovie = movie;
    if (!/[-a-zA-Z0-9-:_.~/?#[\]@!$&'()*+=,;]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9-~._:/?#[\]@!$&'()*+,;=]*)?/.test(movie.trailerLink)) {
      fixedMovie.trailerLink = "https://youtu.be/";
      return fixedMovie;
    } else {
      return fixedMovie;
    }
  };

  const handleToggleLike = (movie) => {
    let fixedMovie = checkMovieLink(movie);
    if (!checkSaved(fixedMovie)) {
      api.setMovie(fixedMovie)
        .then((mov) => {
          getSavedMovies();
        })

        .catch((err) => {
          console.log(err);
        })
    } else if (checkSaved(movie)) {
      handleDeleteMovie(getId(movie));
    };
  }

  const handleDeleteMovie = (id) => {
    api.deleteMovie(id)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const checkSaved = (movie) => {
    if (JSON.parse(localStorage.getItem('localSavedMovies'))) {
      return JSON.parse(localStorage.getItem('localSavedMovies')).some((mov) => mov.movieId === movie.id);
    };
  };

  const getId = (movie) => {
    if (JSON.parse(localStorage.getItem('localSavedMovies'))) {
      return JSON.parse(localStorage.getItem('localSavedMovies')).find((mov) => mov.movieId === movie.id)._id;
    };
  };

  const handleUpdateUser = (name, email) => {
    api.setUser(name, email)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        setCurrentUser({
          name: res.name,
          email: res.email,
          _id: res._id,
        });
        setError('Данные пользователя успешно сохранены');
      })
      .catch((err) => {
        setError('Не удалось сохранить данные, повторите попытку');
        console.log(err);
      })
      .finally(() => {
        clearError();
      });
  };

  const handleExit = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
    setShortsCheckbox(false);
    setShortsCheckboxSaved(false);
    setMoviesAfterSearch([]);
    setShortMoviesAfterSearch([]);
    setSavedMovies([]);
    setShortSavedMovies([]);
    setCurrentUser({
      name: '',
      email: '',
      _id: '',
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />

          <Route path='/movies' element={<ProtectedRoute loggedIn={loggedIn} component={Movies}
            moviesAfterSearch={moviesAfterSearch}
            shortMoviesAfterSearch={shortMoviesAfterSearch}
            shortsCheckbox={shortsCheckbox}
            keyWord={localStorage.getItem('keyWord')}
            handleSearchMovies={handleSearchMovies}
            handleShortsCheckbox={handleShortsCheckbox}
            error={error} preloader={preloader}
            countMovies={countMovies}
            handleMoreMovies={handleMoreMovies}
            handleToggleLike={handleToggleLike}
            checkSaved={checkSaved} />}
          />

          <Route path='/saved-movies' element={<ProtectedRoute loggedIn={loggedIn} component={SavedMovies}
            savedMovies={savedMovies}
            shortSavedMovies={shortSavedMovies}
            shortsCheckboxSaved={shortsCheckboxSaved}
            setShortsCheckboxSaved={setShortsCheckboxSaved}
            setSavedMovies={setSavedMovies}
            setShortSavedMovies={setShortSavedMovies}
            keyWord={localStorage.getItem('keyWordSaved')}
            handleShortsCheckbox={handleShortsCheckbox}
            handleSearchSavedMovies={handleSearchSavedMovies}
            error={error} preloader={preloader} handleToggleLike={handleDeleteMovie} />}
          />

          <Route path='/profile' element={<ProtectedRoute loggedIn={loggedIn} component={Profile} handleUpdateUser={handleUpdateUser} handleExit={handleExit} error={error} />} />
          <Route path='/signup' element={<Register error={error} handleSignup={handleSignup} />} />
          <Route path='/signin' element={<Login error={error} handleSignin={handleSignin} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
