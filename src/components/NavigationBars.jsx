import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const NavigationBars = ({ data, amount }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= amount; i++) {
      setNumbers((prevValue) => [...prevValue, i]);
    }
  }, []);

  return (
    <div>
      {numbers.map((n) => (
        <NavigationBar key={uuid()} data={data} number={n} />
      ))}
    </div>
  );
};

NavigationBars.propTypes = {
  data: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired
}

export default NavigationBars;
