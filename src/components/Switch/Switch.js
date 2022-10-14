import './Switch.css';

function Switch({shortsCheckbox, handleShortsCheckbox, keyWord}) {

  return (
    <div className="switch">
      <label className="switch__box" htmlFor="switch__checkbox">
        <input type="checkbox" id="switch__checkbox" value={shortsCheckbox} onChange={() => handleShortsCheckbox(keyWord)} />
        <div className="switch__checkbox-slider switch__checkbox-round" />
      </label>
      <span className="switch__name">Короткометражки</span>
    </div>

  );
}

export default Switch;
