var solution = function (A) {
		// Detected time complexity: O(1)
    var min = null, total = 0, acum = 0;
    total = A.reduce(function(a,b){return a+b;});

    for(var i = 0; i < A.length ; i++) {
        total -= A[i];
        var res = Math.abs( (acum + A[i]) - total );
        //console.log(res);
        if(min === null || res < min) {
            min = res;
        }
    }

    return min;
}

module.exports = solution;
