const EachItem = ({ text, icon, id, active, callback }) => {
  return (
    <div
      id={`item-${id}`}
      className={`item${id === active ? " item-active" : ""}`}
      onClick={callback}
    >
      <div className="top-line"></div>
      <div className="parent-of-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default EachItem;
