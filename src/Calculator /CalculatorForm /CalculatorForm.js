import React from 'react'

export default function CalculatorForm() {
  return (
    <div className='CalcForm'>
        <div className='CalcInput'>
            <form>
                <label for="fname">Assets:</label>
                <input type="text" id="fname" name="fname"/>
            </form>
        </div>
    </div>
  )
}
