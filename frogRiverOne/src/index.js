var solution = function (A, X) {
  // Detected time complexity: O(N)
  var b = [];
  for(var i=0; i<X; i++){
      b[i] = 0;
  }
  console.log("b arr", b);
  var acum = 0;
  var t = -1;
  for(var j=0; j<A.length; j++){
    if(b[A[j]-1]===0){
      b[A[j]-1] = 1;
      console.log("found", A[j]-1);
      console.log(">b arr", b);
      acum++;
      if(acum === X){
          return j;
      }
    }
  }

  return t;

}

module.exports = solution;


/**
    // To understand the problem:
    // https://www.reddit.com/r/learnprogramming/comments/3drg9g/understanding_codility_problem_frogriverone/
*/
