var solution = function (N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var max_len = 0;

    var arr = N.toString(2).match(/0+1/g);

    for(var i in arr){
        var n = arr[i].match(/0+/)[0].length;
        if(n > max_len){
            max_len = n;
        }
    }

    return max_len;
}

module.exports = solution;
