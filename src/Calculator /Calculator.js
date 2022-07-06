import React from 'react'
import CalculatorForm from './CalculatorForm /CalculatorForm'
import './Calculator.css'

export default function Calculator() {
  return (
    <div>
      <div className = 'calc-inputs'>
        <div id='assets-calc'>
          <CalculatorForm name = 'Assets'/>
        </div>
        <div id = 'liabilities-calc'>
          <CalculatorForm name = 'Liabilities'/>
        </div>
        <div id = 'income-calc'>
          <CalculatorForm name = 'Income'/>
        </div>
      </div>
    </div>

  )
}


