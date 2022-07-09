import React from 'react';

export default function Table(props) {
  // eslint-disable-next-line react/prop-types
  const { userData } = props;
  let list;

  React.useEffect(() => {
    // eslint-disable-next-line react/prop-types
    list = userData.map((el) => (
      <tr>
        <td>{el.name}</td>
        <td>{el.type}</td>
        <td>{`$${el.amount}`}</td>
        <td>❌</td>
      </tr>
    ));
  }, [userData]);

  // eslint-disable-next-line react/prop-types

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
        {
          // TODO: fix amount to be relative to frequency
          list
        }
      </tbody>
    </table>
  );
}
