var solution = function (A) {
		// http://stackoverflow.com/a/19667905/467034
		// Detected time complexity: O(N)
    var right = A.reduce(function(a,b){ return a+b;});
    var left = 0;
    var min = null;
    //console.log(">>", right);
    for(var i=0;i<A.length;i++){
        left += A[i];
        right -= A[i];
        var res = Math.abs(left - right);
        console.log("left: ", left, "right:", right, "res: ", res);
        if(min === null || res < min) {
            min = res;
            console.log("new min: ", min);
        }
    }
    return min;
}

module.exports = solution;
