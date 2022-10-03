import './AboutHeader.css';

function AboutHeader({title}) {
  return (
    <div className="AboutHeader">
      <h2 className="AboutHeader__title">{title}</h2>
    </div>
  );
}

export default AboutHeader;
