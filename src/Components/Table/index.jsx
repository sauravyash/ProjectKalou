import React from 'react';
import PropTypes from 'prop-types';

import './table.css';

export default function Table(props) {
  const { userData, setUserData } = props;
  const list = userData.map((el) => (
    <tr key={el.id}>
      <td>{el.name}</td>
      <td>{el.type}</td>
      <td>{`$${el.amount} ${el.freq !== 'None' ? `/ ${el.freq}` : ''}`}</td>
      <td>
        <button
          type="button"
          className="button"
          style={{
            padding: '0.2rem 0.5rem',
            height: 'auto',
            borderColor: 'white',
          }}
          onClick={() => setUserData(userData.filter((obj) => obj.id !== el.id))}
        >
          ❌
        </button>

      </td>
    </tr>
  ));

  const tableStyle = {
    maxWidth: '32rem',
  };

  return (
    <table className="column p-4 table is-hoverable" style={tableStyle}>
      <thead>
        <tr>
          <th align="center">Name</th>
          <th align="center">Type</th>
          <th align="center">Amount</th>
          <th align="center"><abbr title="Delete">Del</abbr></th>
        </tr>
      </thead>
      <tbody>
        {
          // TODO: fix amount to be relative to frequency
          list
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(['Asset', 'Liabilty', 'Income', 'Expense']),
      amount: PropTypes.number,
      freq: PropTypes.oneOf(['Day', 'Week', 'Fortnight', 'Month', 'Quarter', 'Year', 'None']),
    }),
  ),
  setUserData: PropTypes.func,
};

Table.defaultProps = {
  userData: [],
  setUserData: () => {},
};
