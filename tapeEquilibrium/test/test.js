var assert = require("assert");
var TapeEquilibrium = require("../src/index.js")

describe("Tape Equilibrium Tests", function(){
  it("Test TapeEquilibrium([3, 8, 9, 7, 6], 3) => 7", function(done){
    assert.deepEqual(TapeEquilibrium([3, 1, 2, 4, 3]), 7);
    done();
  });

  it("Test TapeEquilibrium([-1000, 1000]) => 2000", function(done){
    assert.deepEqual(TapeEquilibrium([-1000, 1000]), 2000);
    done();
  });
});
