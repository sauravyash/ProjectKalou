import React from 'react';

export default function CalculatorForm() {
  return (
    <div className="CalcForm">
      <div className="CalcInput">
        <form>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="fname">
            <span>Assets: </span>
            <input type="text" id="fname" name="fname" />
          </label>
        </form>
      </div>
    </div>
  );
}
