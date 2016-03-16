var assert = require("assert");
var BinaryGap = require("../src/index.js")

describe("Binary Gap Tests", function(){
  it("Test 10 > bin 1010 > gap should be 1", function(done){
    assert.equal(BinaryGap(10),1);
    done();
  });

  it("Test 2332236363 > bin 10001011000000110001101001001011 > gap should be 6", function(done){
    assert.equal(BinaryGap(2332236363),6);
    done();
  });
});
