import React from 'react';

export default function Table() {
  const tableStyle = {
    maxWidth: '32rem',
  };
  return (
    <table className="column p-4 table is-hoverable" style={tableStyle}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th><abbr title="Delete">Del</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ex1</td>
          <td>Asset</td>
          <td>$3000</td>
          <td>❌</td>
        </tr>
      </tbody>
    </table>
  );
}
