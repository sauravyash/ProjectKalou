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
      type: PropTypes.oneOf(['Asset', 'Liabilty', 'Income', 'Expense']),
      amount: PropTypes.number,
      freq: PropTypes.oneOf(['Day', 'Week', 'Fortnight', 'Month', 'Quarter', 'Year']),
    }),
  ),
  setUserData: PropTypes.func,
};

Calculator.defaultProps = {
  userData: [],
  setUserData: () => { },
};
/*

*/
