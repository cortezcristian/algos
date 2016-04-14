var solution = function (A) {
		// Detected time complexity: O(N) or O(N*log(N))
		// Based on
		// https://codesays.com/2015/solution-to-odd-occurrences-in-array-by-codility/
		// https://codesays.com/2014/solution-to-perm-missing-elem-by-codility/
		var res = 0, num;
    for(num in A){
        res = res ^ A[num];
    }

		// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Bitwise_Operators#Bitwise_XOR
		// solution([9,3,9,3,7]) => 7
		// X^X = 0
		// 0^X = X
		//
		// 9^14 = 7
		// 7^9 = 14
		// 7^14 = 9
		/**
			a,b,a XOR b
			0	0	0
			0	1	1
			1	0	1
			1	1	0
		*/
    return res;
}

module.exports = solution;
