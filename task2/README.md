# algos
Algorithms Practices

## Task 2

```
B[i]*(-2)^i

Dado un array:

var A = [1,0,1,1,0]
var sum = 0;
for(var i in A){
  sum += A[i]*Math.pow(-2, parseInt(i));
}

9 encontrar el opuesto -9
para -23 encontrar el opuesto 23
y devolverlo en un array

```

Para los positivos no habia que hacer reverse:
https://gist.github.com/magician11/92af987c9632f53ff658

```
function (decimal) {

		if (isNaN(decimal)) return "not a number";

		var negabinary = [];
		var base = -2;
		var remainder;

		while(decimal != 0) {

				remainder = decimal % base;
				decimal = Math.ceil(decimal / base);
				negabinary.push(remainder >= 0 ? remainder : -remainder);
		}

		return negabinary.reverse().join('');
}
```

http://haacked.com/archive/2006/05/01/negativebasenumberingsystems.aspx/
