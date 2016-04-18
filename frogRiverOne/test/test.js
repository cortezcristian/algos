var assert = require("assert");
var FrogRiverOne = require("../src/index.js")

describe("Tape Equilibrium Tests", function(){
  it("Test FrogRiverOne([1,3,1,4,2,3,5,4], 5) => 6", function(done){
    assert.deepEqual(FrogRiverOne([1,3,1,4,2,3,5,4], 5), 6);
    done();
  });

  it("Test FrogRiverOne([2,2,2,2,2], 2) => -1", function(done){
    assert.deepEqual(FrogRiverOne([2,2,2,2,2], 2), -1);
    done();
  });
});
