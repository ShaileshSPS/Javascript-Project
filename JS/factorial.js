// 5! = 5*4*3*2*1 = 120

var factorial = (number) => {
	var result = 1;
	for (var i = number; i > 0; i--) {
		result = result * i;
	}
	return result;
}
//console.log(factorial(5));


// Recursive
var factorial = (number) => {
	if(number == 1) {
		return 1;
	}
	else {
		return number * factorial(number-1);
	}
}
console.log(factorial(5));