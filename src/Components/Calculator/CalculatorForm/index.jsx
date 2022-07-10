import React from 'react';
import PropTypes from 'prop-types';

import { CalculatorForm } from './CalculatorElements';

import './form.css';

export default function Form(props) {
  const { userData, setUserData } = props;

  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('Asset');
  const [amount, setAmount] = React.useState(0);
  const [freq, setFreq] = React.useState('None');

  const submit = (e) => {
    e.preventDefault();

    const tmp = [...userData];
    tmp.push({
      id: new Date().getTime(),
      name,
      type,
      amount,
      freq: (type === 'Asset' || type === 'Liability') ? 'None' : freq,
    });
    setUserData(tmp);

    setName('');
    setType('Asset');
    setAmount(0);
    setFreq('None');
  };

  return (
    <CalculatorForm className="column p-6">
      <form onSubmit={submit}>
        <h1 className="title">Add an Item</h1>
        <div className="field">
          <label className="label" htmlFor="type">
            <span>Type</span>
            <div className="control">
              <div className="select">
                <select name="type" value={type} onChange={(e) => { setType(e.target.value); }} required>
                  <option value="Asset">Asset</option>
                  <option value="Liability">Liability</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
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
            placeholder="Name/Description"
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
            onChange={(e) => { setAmount((e.target.valueAsNumber)); }}
            min="0"
            required
          />
        </div>
        <div className={`field ${type === 'Income' || type === 'Expense' ? '' : 'is-hidden'}`}>
          <label className="label" htmlFor="freq">
            <span>Frequency (How Often)</span>
            <div className="control">
              <div className="select">
                <select name="freq" value={freq} onChange={(e) => { setFreq(e.target.value); }}>
                  <option value="Day">Daily</option>
                  <option value="Week">Weekly</option>
                  <option value="Fortnight">Fortnightly</option>
                  <option value="Month">Monthly</option>
                  <option value="Quarter">Quarterly</option>
                  <option value="Year">Yearly</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field is-grouped is-justify-content-center">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
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
      type: PropTypes.oneOf(['Asset', 'Liabilty', 'Income', 'Expense']),
      amount: PropTypes.number,
      freq: PropTypes.oneOf(['Day', 'Week', 'Fortnight', 'Month', 'Quarter', 'Year']),
    }),
  ),
  setUserData: PropTypes.func,
};

Form.defaultProps = {
  userData: [],
  setUserData: () => { },
};
