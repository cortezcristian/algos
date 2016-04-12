var assert = require("assert");
var CyclicRotation = require("../src/index.js")

describe("Cyclic Rotation Tests", function(){
  it("Test CyclicRotation([3, 8, 9, 7, 6], 3) => [9, 7, 6, 3, 8]", function(done){
    assert.deepEqual(CyclicRotation([3, 8, 9, 7, 6], 3),[9, 7, 6, 3, 8]);
    done();
  });

  it("Test CyclicRotation([-9, 0], 2) => [-9, 0]", function(done){
    assert.deepEqual(CyclicRotation([-9, 0], 2),[-9, 0]);
    done();
  });

  it("Test CyclicRotation([], 1) => []", function(done){
    assert.deepEqual(CyclicRotation([], 1), []);
    done();
  });

  it("Test CyclicRotation([5, -1000], 1) => [-1000, 5]", function(done){
    assert.deepEqual(CyclicRotation([5, -1000], 1), [-1000, 5]);
    done();
  });
});
