function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = arr[0];
  let avg = Number((sum / arr.length).toFixed(2));

  for(let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      } 
      if (arr[i] < min) {
          min = arr[i];
      }
     sum += arr[i];
}
  return { min: min, max: max, avg: avg };
 
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
