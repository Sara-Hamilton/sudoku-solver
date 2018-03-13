import { Square } from './../js/square.js';

describe('Square', function() {

  it("will validate if a square is null", function() {
    console.log("working")
    var testSquare = new Square(1, 1);
    expect(testSquare.value).toEqual(null);
  });
});
