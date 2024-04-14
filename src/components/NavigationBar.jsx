import { useState, useId } from "react";
import EachItem from "./EachItem";
import uuid from "react-uuid";
import Proptypes from "prop-types";

const NavigationBar = ({ data, number }) => {
  const [active, setActive] = useState(null);
  const itemId = useId();

  return (
    <div className="navigation-bar" id={`navigation-bar${number}`}>
      <div className="menu-bar">
        {data.map((item) => (
          <EachItem
            key={itemId + uuid()}
            active={active}
            callbackFn={() => setActive(item.id)}
            {...item}
          />
        ))}
      </div>
      <footer className="bottom-bar">
        <div className="bottom-line"></div>
      </footer>
    </div>
  );
};

NavigationBar.propTypes = {
  data: Proptypes.array.isRequired,
  number: Proptypes.number.isRequired
}

export default NavigationBar;
