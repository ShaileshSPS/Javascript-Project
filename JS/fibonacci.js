// 0 1 1 2 3 5 8 13 21

var fibonacci = (number) => {
	var fib1 = 0;
	var fib2 = 1;
	var fib3 = 0;
	console.log(fib1);
	console.log(fib2);

	for (var i = 2; i < number; i++) {
		fib3 = fib1 + fib2;
		console.log(fib3);
		fib1 = fib2;
		fib2 = fib3;
	}
}
//fibonacci(10);


// fibonacci using arrays
var fibonacci = (number) => {
	var arr = [];
	arr[0] = 0;
	arr[1] = 1;
	console.log(arr[0])
	console.log(arr[1])

	for (var i = 2; i < number; i++) {
		arr[i] = arr[i-1] + arr[i-2];
		console.log(arr[i]);
	}
}
//fibonacci(10);