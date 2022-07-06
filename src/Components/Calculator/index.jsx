import React from 'react';
import PropTypes from 'prop-types';

import CalculatorForm from './CalculatorForm';

export default function Calculator(props) {
  const { userData, setUserData } = props;

  return (
    <div className="column p-6">
      <CalculatorForm userData={userData} setUserData={setUserData} />
    </div>
  );
}

Calculator.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(['Asset', 'Liabilty']),
      amount: PropTypes.number,
    }),
  ),
  setUserData: PropTypes.func,
};

Calculator.defaultProps = {
  userData: [],
  setUserData: () => {},
};
