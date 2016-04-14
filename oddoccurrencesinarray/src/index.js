var solution = function (A) {
		// Detected time complexity: O(N**2)
    if(A.length % 2 === 0) {
        return;
    } else {
        do {
            var a = A.pop();
            var x = A.length;
            for (var i = 0; i < A.length; i++){
                if(a === A[i]){
                    A.splice(i,1);
                }
            }
            if(A.length === x){
                A = [a];
            }
        } while (A.length > 1);
        return A[0];
    }
}

module.exports = solution;
