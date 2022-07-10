/* eslint-disable */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { CalculatorForm } from './CalculatorElements';
import { deriveLinearPredict } from '../calcFunctions';
import Display from '../../Display';

export default function Form(props) {
  const { userData, setUserData} = props;
  const {assetDataArray, liabilityDataArray, incomeDataArray, expenseDataArray} = props;
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
    props.userData.push({ name: nameSubmit, type: subjectSubmit, amount: amountSubmit });
    props.assetDataArray.push(deriveLinearPredict(userData,'Asset'));
    props.liabilityDataArray.push(deriveLinearPredict(userData,'Liability'));
    alert('You have submitted the form.');
  };

  console.log('asset',assetDataArray);
  console.log('liab',liabilityDataArray)


  const handleReset = (event) => {
    event.preventDefault();
    alert('You have reset the form .');
    setUserData([])
  };

  return (
    <CalculatorForm>
      <form>
        <h1 className="title">Add an Item</h1>
        <p>Refresh to Reset</p>
        <div className="field">
          <input className="input" type="text" id="name" name="name" placeholder="Name Of Asset/Liability:" ref={nameRef} />
        </div>
        <div className="field">
          <label className="label" htmlFor="type">
            <span>Subject</span>
            <div className="control">
              <div className="select">
                <select ref={subjectRef}>
                  <option >Asset</option>
                  <option >Liability</option>
                  <option >Income</option>
                  <option >Expense</option>
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
            <button type="button" className="button is-link is-light" onClick = {handleReset}>View Plot</button>
          </div>
        </div>
      </form>
      <Display displayData = {assetDataArray[assetDataArray.length-1]} displayName = {'Asset'}/>
      {/* <Display displayData = {liabilityDataArray[liabilityDataArray.length-1]} displayName = {'Liabilites'}/>
      <Display displayData = {liabilityDataArray[liabilityDataArray.length-1]} displayName = {'Income'}/>
      <Display displayData = {liabilityDataArray[liabilityDataArray.length-1]} displayName = {'Expense'}/> */}
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
  setDataArray: PropTypes.func,
};

Form.defaultProps = {
  userData: [],
  assetDataArray: [],
  liabilityDataArray:[],
  setUserData: (userData) => {handleSubmit },
};
