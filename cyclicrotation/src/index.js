var solution = function (A, K) {
    var B = [];
		if(A.length === 0 || A.length === K) {
        return A;
    } else if (K < A.length) {
        B = A.splice((A.length-1-K+1), K);
        return B.concat(A);
    } else {
        do{
            K -= A.length;
        }while(K > A.length)
        B = A.splice((A.length-1-K+1), K);
        return B.concat(A);
    }
}

module.exports = solution;
