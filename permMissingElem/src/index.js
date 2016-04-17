var solution = function (A) {
		if(A.length === 0){
			return 1;
		}
		// https://codesays.com/2014/solution-to-perm-missing-elem-by-codility/
		// Detected time complexity: O(N) or O(N * log(N))
    var sum = A.reduce(function(a,b){ return a+b;});
    return 0.5*(A.length+1)*(A.length+2)-sum;
}

module.exports = solution;


/**
		var xor_sum = 0;

    for(var i = 0; i < A.length;i++) {
        console.log( (i+1), xor_sum, A[i]);
    	xor_sum = xor_sum ^ A[i] ^ (i+1);

    }
    console.log(xor_sum, (A.length +1))
    return xor_sum ^ (A.length +1);


// not working
var or = A.sort(function(a, b){return a-b});
    var r = 0;
    for(var i=0; i < A.length; i++) {
        if (Math.abs(or[i]-or[i+1]) > 1) {
            r = or[i]+1;
            return r;
        }
    }
    return r;

**/
