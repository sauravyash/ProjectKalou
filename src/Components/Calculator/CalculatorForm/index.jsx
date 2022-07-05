import React from 'react';
import PropTypes from 'prop-types';

import { CalculatorForm } from './CalculatorElements';

export default function Form(props) {
  const { userData, setUserData } = props;
  setUserData(userData);

  return (
    <CalculatorForm>
      <form>
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">
            <span>Name Of Asset/Liability: </span>
            <input className="input" type="text" id="name" name="name" />

          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="type">
            <span>Subject</span>
            <div className="control">
              <div className="select">
                <select>
                  <option>Asset</option>
                  <option>Liability</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="button" className="button is-link">Submit</button>
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