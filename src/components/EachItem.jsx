import PropTypes from "prop-types";

const EachItem = ({ text, icon, id, active, callbackFn }) => {
  return (
    <div
      id={`item-${id}`}
      className={`item${id === active ? " item-active" : ""}`}
      onClick={callbackFn}
    >
      <div className="top-line"></div>
      <div className="parent-of-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

EachItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  callbackFn: PropTypes.func.isRequired
}

export default EachItem;
