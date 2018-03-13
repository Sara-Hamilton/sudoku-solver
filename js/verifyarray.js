// import { Square } from './../js/square.js';

// export function Sudoku(){
//
// }


export function VerifyArray(testArray) {
  console.log(testArray);
  testArray.sort();
  console.log(testArray);
  var goodArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (sortedTestArray === goodArray) {
    return "true";
  } else {
    return "false";
  }
};
