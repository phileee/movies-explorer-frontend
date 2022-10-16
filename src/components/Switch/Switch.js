import './Switch.css';
import { useLocation } from 'react-router-dom';

function Switch({shortsCheckbox, shortsCheckboxSaved, handleShortsCheckbox, keyWord}) {

  const location = useLocation();

  return (
    <div className="switch">
      <label className="switch__box" htmlFor="switch__checkbox">
        <input type="checkbox" id="switch__checkbox" value={location.pathname === '/movies' ? shortsCheckbox : shortsCheckboxSaved} checked={location.pathname === '/movies' ? shortsCheckbox : shortsCheckboxSaved} onChange={() => handleShortsCheckbox(keyWord)} />
        <div className="switch__checkbox-slider switch__checkbox-round" />
      </label>
      <span className="switch__name">Короткометражки</span>
    </div>

  );
}

export default Switch;
