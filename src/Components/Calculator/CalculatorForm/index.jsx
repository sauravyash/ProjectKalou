import React from 'react';
import PropTypes from 'prop-types';

import { CalculatorForm } from './CalculatorElements';

export default function Form(props) {
  const { userData, setUserData } = props;

  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [freq, setFreq] = React.useState('');

  const submit = (e) => {
    e.preventDefault();

    const tmp = userData;
    tmp.push({
      name,
      type,
      amount,
      freq,
    });
    setUserData(tmp);

    setName('');
    setType('');
    setAmount(0);
    setFreq('');
  };

  return (
    <CalculatorForm>
      <form onSubmit={submit}>
        <h1 className="title">Add an Item</h1>
        <div className="field">
          <label className="label" htmlFor="type">
            <span>Type</span>
            <div className="control">
              <div className="select">
                <select name="type" value={type} onChange={(e) => { setType(e.target.value); }}>
                  <option>Asset</option>
                  <option>Liability</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field">
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Name Of Asset/Liability:"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
            required
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => { setAmount(e.target.value); }}
            required
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="freq">
            <span>Frequency (How Often)</span>
            <div className="control">
              <div className="select">
                <select name="freq" value={freq} onChange={(e) => { setFreq(e.target.value); }}>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Fortnightly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button type="button" className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </CalculatorForm>
  );
}

Form.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(['Asset', 'Liabilty']),
      amount: PropTypes.number,
    }),
  ),
  setUserData: PropTypes.func,
};

Form.defaultProps = {
  userData: [],
  setUserData: () => { },
};
