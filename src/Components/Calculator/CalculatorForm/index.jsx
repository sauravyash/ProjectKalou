import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { CalculatorForm } from './CalculatorElements';

export default function Form(props) {
  const { userData, setUserData } = props;
  setUserData(userData);
  console.log('userData: ', userData);
  const nameRef = useRef();
  const amountRef = useRef();
  const subjectRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameSubmit = nameRef.current.value;
    const amountSubmit = amountRef.current.value;
    const subjectSubmit = subjectRef.current.value;
    console.log(subjectSubmit);
    userData.push({ name: nameSubmit, type: subjectSubmit, amount: amountSubmit });
    alert('You have submitted the form.');
  };

  return (
    <CalculatorForm>
      <form>
        <h1 className="title">Add an Item</h1>
        <div className="field">
          <input className="input" type="text" id="name" name="name" placeholder="Name Of Asset/Liability:" ref={nameRef} />
        </div>
        <div className="field">
          <label className="label" htmlFor="type">
            <span>Subject</span>
            <div className="control">
              <div className="select">
                <select>
                  <option ref={subjectRef}>Asset</option>
                  <option ref={subjectRef}>Liability</option>
                  <option ref={subjectRef}>Income</option>
                  <option ref={subjectRef}>Expense</option>
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field">
          <input className="input" type="text" id="amount" name="amount" placeholder="Amount" ref={amountRef} />
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="button" className="button is-link" onClick={handleSubmit}>Submit</button>
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
