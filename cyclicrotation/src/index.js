var solution = function (A, K) {
    var B = [];
    if(A.length === 0) {
				return A;
    } if(K < A.length) {
        B = A.splice((K==1)?1:K-1,A.length+1)
        console.log("Menor A>", A, "B>", B);
        return B.concat(A);
    } else if (K ==  A.length)  {
        //B = A.splice(0, K);
        return A;
    } else {
        do{
            K -= A.length;
        }while(K > A.length)
        //B = A.splice(0, K-1);
        B = A.splice((K==1)?1:K,A.length+1)
        console.log("Mayor A>", A, "B>", B);
        return B.concat(A);
    }
}

module.exports = solution;
