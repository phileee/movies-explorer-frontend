import './Switch.css';

function Switch() {
  return (
    <div className="switch">
      <label class="switch__box" for="switch__checkbox">
        <input type="checkbox" id="switch__checkbox" />
        <div class="switch__checkbox-slider switch__checkbox-round" />
      </label>
      <span class="switch__name">Короткометражки</span>
    </div>

  );
}

export default Switch;
