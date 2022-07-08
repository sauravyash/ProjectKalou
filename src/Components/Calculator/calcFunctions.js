const PREDICTEDTIME = 24; // months

const average = (array) => array.reduce((a, b) => a + b) / array.length;

export function predictConstant(values) {
  // Use for consistent subjects such as Expenses and Liabilities
  // Predict for the next 24 months
  const currentLength = values.length;
  for (let i = 0; i < PREDICTEDTIME - currentLength; i += 1) {
    values.push(average(values));
  }
  return values;
}

/* eslint-disable */
function deriveLinearPredict(array) {
  const currentLength = array.length;
  const intercept = array[array.length-1];
  const temp = [];
  let m = array[0];
  // Find rate of change of array
  if (array.length === 1) {
    m = array[0];
  } else if (array.length === 2) {
    m = (array[1] - array[0])/2;
  } else {
    for (let j = 1; j < array.length -1 ; j += 1) {
      temp.push(average([array[j],array[j-1]]));
    }
    m = average(temp);
  }
  
  for (let i = 1; i < PREDICTEDTIME + 1 - currentLength; i += 1) {
    array.push(m*i + intercept);
  }
  return array;
}

export function predictLinear(values) {
  // Use for consistent subjects such as Expenses and Liabilities
  // Predict for the next 24 months
  deriveLinearPredict(values);
  return values;
}
