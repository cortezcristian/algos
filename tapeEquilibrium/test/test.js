var assert = require("assert");
var TapeEquilibrium = require("../src/index.js")

describe("Tape Equilibrium Tests", function(){
  it("Test TapeEquilibrium([3, 1, 2, 4, 3], 3) => 1", function(done){
    assert.deepEqual(TapeEquilibrium([3, 1, 2, 4, 3]), 1);
    done();
  });

  it("Test TapeEquilibrium([-1000, 1000]) => 2000", function(done){
    assert.deepEqual(TapeEquilibrium([-1000, 1000]), 2000);
    done();
  });
});
