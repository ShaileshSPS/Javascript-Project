var reverseNumber = (number) => {
	var result = 0;
	var temp = 0;

	while(number > 0) {
		temp = number % 10;
		result = (result * 10) + temp;
		number = parseInt(number / 10);
	}

	return result;
}
//console.log(reverseNumber(12345));



//sum of cubes of number is eqaul to the given number itself.
var armstrongNumber = (number) => {
	var result = 0;
	var temp = 0;

	while(number > 0) {
		temp = number % 10;
		result = result + (temp * temp * temp);
		number = parseInt(number / 10);
	}

	return result;
}
//console.log(armstrongNumber(153));


// Sum of digits in a Number
var sumNumber = (number) => {
	var result = 0;
	var temp = 0;

	while(number > 0) {
		temp = number % 10;
		result = result + temp;
		number = parseInt(number / 10);
	}

	return result;
}
//console.log(sumNumber(123));



// Math.pow(3,3)
var powerNumber = (number1, number2) => {
	var result = 1;

	if(number1 > 0 && number2 > 0) {
		while(number2 > 0) {
			result = result * number1;
			number2--;
		}
	}
	else {
		(number1 < 0) ? number1 = -number1 : number1 = number1;
		(number2 < 0) ? number2 = -number2 : number2 = number2;

		while(number2 > 0) {
			result = result * number1;
			number2--;
		}
		result = -result;
	}	

	return result;
}
console.log(powerNumber(-3, 3));


