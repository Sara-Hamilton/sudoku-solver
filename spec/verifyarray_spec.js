// import { Sudoku } from './../js/sudoku.js';
// import { Square } from './../js/square.js';
import { VerifyArray } from './../js/verifyarray.js';

describe('VerifyArray', function() {

  it("will verify if array contains 1-9", function() {
    var testArray = [1,2,6,7,8,8,9,3,0];
    var result = VerifyArray(testArray);
    console.log(result);

    expect(result).toEqual("false");
  });

});
