// Max and Min element in an array
var arr = [20, 40, 50, 10, 5];
var max = 0;
var min = 0;

for(var i = 0; i<arr.length; i++) {
	if(arr[i] > max) {
		max = arr[i];
	}
	else if(arr[i] < max) {
		min = arr[i];
	}
}
// console.log(`Max element is: ${max}`)
// console.log(`Min element is: ${min}`)



// Array Sort
var arr = [20, 40, 50, 10, 5];

for(var i = 0; i<arr.length; i++) {
	for(var j = i+1; j<arr.length; j++) {
		if(arr[i] > arr[j]) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}	
}
// console.log(arr);



//delete element in an array
var arr = [20, 40, 50, 10, 5];
var element = 10;

for(var i = 0; i<arr.length; i++) {
	if(arr[i] == element) {
		arr.splice(i, 1);
	}	
}
// console.log(arr);
var arr = [20, 40, 50, 10, 5];
var element = 10;

//arr = arr.filter(item => item !== element)
arr = arr.filter(function(item) {
    return item !== element
})
// console.log(arr);

var arr = [20, 40, 50, 10, 5];
var element = 10;
var filteredArray = [];

for(var i = 0, j = 0; i<arr.length; i++) {
	if(arr[i] != element) {
		filteredArray[j++] = arr[i];
	}
}
//console.log(filteredArray);



// Array map function
var arr = [20, 40, 50, 10, 5];
var element = 10;
var filteredArray = [];
var j=0;

arr.map(function(item){
	if (item != element) {
		 filteredArray[j++] = item;
	}
})
// console.log(filteredArray)



// search element in an array
var arr = [20, 40, 50, 10, 5];
var element = 10;
var foundFlag = false;

for(var i = 0; i<arr.length; i++) {
	if(arr[i] == element) {
		foundFlag = true;
		break;
	}
	else {
		foundFlag = false;
	}
}
// console.log(foundFlag);


// Remove dublicates from an array.
var arr = [20, 40, 50, 10, 5, 20, 10, 5];
var newArr =  [];
var j = 0;
for(var i = 0; i<arr.length; i++) {
	if(!newArr.includes(arr[i])) {
		newArr[j++] = arr[i];
	}
}
//console.log(newArr);

var arr = [20, 40, 50, 10, 5, 20, 10, 5];
var set = new Set(arr);
//console.log(set);

var arr = [20, 40, 50, 10, 5, 20, 10, 5];
var set = new Set();

for(var i = 0; i<arr.length; i++) {
	if(!set.has(arr[i])) {
		set.add(arr[i]);
	}
}
// console.log([...set]);


// Decimal Input Comparison
function compareDecimal(number) {
	var numbers = number.toString().split('.');
	
	var number1 = numbers[0];
	var number2 = numbers[1];

	if(number1 == '' || number1 == null) {
		number1=0;
	}

	if(number2 == '' || number2 == null) {
		number2=0;
	}

	if(parseInt(number1) > parseInt(number2)) {
		console.log(`number1 ${number1} is greater than number2 ${number2}`)
	}
	else {
		console.log(`number1 ${number2} is greater than number2 ${number1}`)	
	}
}
compareDecimal(19.101);



