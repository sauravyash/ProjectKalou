/* eslint-disable */
const PREDICTEDTIME = 7; // months

function average (array){
  let sum = 0;
  for (let i = 0;  i < array.length-1; i += 1){
    sum+=parseInt(array[i]);
  }
  return sum/array.length
}

function convertToInt(array){
  let tempArr = [];
  for (let a = 0; a < array.length-1; a+=1){
    tempArr.push(parseInt(array[a]));
  }
  return tempArr;
}

export function processObjectData(userData, fieldName) {
  let dataArray = [userData[0].amount];
  for (let i = 1; i < userData.length; i += 1) {
    if(userData[i].type == fieldName) {
      dataArray.push(userData[i].amount);
    }
  }
  return dataArray
}

export function predictConstant(userData,fieldName) {
  // Use for consistent subjects such as Expenses and Liabilities
  // Predict for the next 24 months
  let values = processObjectData(userData,fieldName);
  const currentLength = values.length;
  for (let i = 0; i < PREDICTEDTIME - currentLength; i += 1) {
    values.push(average(values));
  }
  return values;
}


export function deriveLinearPredict(userData,fieldName) {
  let array = convertToInt(processObjectData(userData,fieldName));
  console.log('test',array)
  const currentLength = parseInt(array.length);
  const intercept = parseInt(array[array.length-1]);
  const temp = [];
  let m = parseInt(array[0]);
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
  
  let sum = 0;
  for (let i = 1; i < PREDICTEDTIME + 1 - currentLength; i += 1) {
    sum = m*i + intercept;
    array.push(sum);
  }
  console.log('modified',array)
  return array;
}



