import { useState, useId } from "react";
import EachItem from "./EachItem";

import uuid from "react-uuid";

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
            callback={() => setActive(item.id)}
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

export default NavigationBar;
