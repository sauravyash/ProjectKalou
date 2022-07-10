import React from 'react';
// import PropTypes from 'prop-types';

import { deriveLinearPredict, predictConstant } from './calcFunctions';

import CalculatorForm from './CalculatorForm';
import Table from './Table';

const sample = [
  {
    amount: 200, freq: 'Week', id: 1657426807440, name: 'rent', type: 'Expense',
  },
  {
    amount: 620, freq: 'Fortnight', id: 1657426850888, name: 'job', type: 'Income',
  },
  {
    amount: 1200, freq: 'None', id: 1657426876768, name: 'stocks', type: 'Asset',
  },
  {
    amount: 920, freq: 'None', id: 1657426889995, name: 'crypto', type: 'Asset',
  },
  {
    amount: 400, freq: 'None', id: 1657427083991, name: 'taxes', type: 'Liability',
  },
];

export default function Calculator(props) {
  // eslint-disable-next-line react/prop-types
  const { setChartData } = props;
  const [userData, setUserData] = React.useState(sample);

  React.useEffect(() => {
    const incomeData = deriveLinearPredict(userData, 'Income');
    const expenseData = deriveLinearPredict(userData, 'Expense');
    const assetData = predictConstant(userData, 'Asset');
    const liabilityData = predictConstant(userData, 'Liability');

    const calcData = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < incomeData.length; i++) {
      calcData.push(incomeData[i] + assetData[i] - expenseData[i] - liabilityData[i]);
    }

    setChartData(calcData);
  }, [userData]);

  return (
    <div className="container column columns is-justify-content-center" style={{ width: '100%' }}>
      <CalculatorForm userData={userData} setUserData={setUserData} />
      <Table userData={userData} setUserData={setUserData} />
    </div>
  );
}

// Calculator.propTypes = {
//   userData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       type: PropTypes.oneOf(['Asset', 'Liabilty', 'Income', 'Expense']),
//       amount: PropTypes.number,
//       freq: PropTypes.oneOf(['Day', 'Week', 'Fortnight', 'Month', 'Quarter', 'Year']),
//     }),
//   ),
//   setUserData: PropTypes.func,
// };

// Calculator.defaultProps = {
//   userData: [],
//   setUserData: () => { },
// };
// /*

// */
