import './PageNotFound.css';

import { Link, useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <>
      <p className="pageNotFound__number">404</p>
      <p className="pageNotFound__message">Страница не найдена</p>
      <Link className="pageNotFound__link" onClick={() => navigate(-2)}>Назад</Link>
    </>
  );
}

export default PageNotFound;
