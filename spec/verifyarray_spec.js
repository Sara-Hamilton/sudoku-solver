import { VerifyArray } from './../js/verifyarray.js';

describe('VerifyArray', function() {

  it("will verify if array does not contain 1-9", function() {
    var testArray = [1,2,6,7,8,8,9,3,0];
    var result = VerifyArray(testArray);
    expect(result).toEqual("false");
  });

  it("will verify if array does contain 1-9", function() {
    var testArray = [1,2,9,8,7,6,3,4,5];
    var result = VerifyArray(testArray);
    expect(result).toEqual("true");
  });

  it("will verify if array length is not 9", function() {
    var testArray = [1,2,9,8,7,6,3,4];
    var result = VerifyArray(testArray);
    expect(result).toEqual("false");
  });

});
