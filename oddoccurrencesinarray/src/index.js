var solution = function (A) {
		// Detected time complexity: O(N) or O(N*log(N))
		// Based on
		// https://codesays.com/2015/solution-to-odd-occurrences-in-array-by-codility/
		// https://codesays.com/2014/solution-to-perm-missing-elem-by-codility/
		var res = 0, num;
    for(num in A){
        res = res ^ A[num];
    }
    return res;
}

module.exports = solution;
