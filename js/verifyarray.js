export function VerifyArray(testArray) {
  console.log(testArray);
  testArray.sort();
  console.log(testArray);
  var goodArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (testArray.length !== goodArray.length) {
    return "false";
  }
  for ( var i = 0; i < goodArray.length; i++) {
    if ( testArray[i] !== goodArray[i]) {
      return "false";
    } else {
      return "true";
    }
  }
}
