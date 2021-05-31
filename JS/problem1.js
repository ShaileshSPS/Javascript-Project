// Given Array containing Name and marks, display marks and sum of the marks for each individual

var inputArr = [
	["Rahul", 20],
	["Rahul", 30],
	["Rahul", 10],
	["Guru", 10],
	["Mohan", 20]
];

var prevElement = null;
var count = 0;
var countArray = [];

for(i in inputArr) {
	debugger;
	if(prevElement === null) {
		prevElement = inputArr[i][0]; // adding name
		count = 1; 
		continue;
	}
	if(prevElement !== inputArr[i][0]) {
		countArray.push(count);
		prevElement = inputArr[i][0];
		count = 1;
		continue;
	}
	prevElement = inputArr[i][0];
	count++;
}
countArray.push(count); // countArray consists of index and count of element it has repeated


var prevElement = null;
var totalCount = 0;
var countIndex = 0;
var sum = 0;

for(i in inputArr) {
	debugger;
	if(prevElement !== inputArr[i][0]) {
		console.log(inputArr[i][0]); // printing name once
	}
	prevElement = inputArr[i][0];
	totalCount++;
	sum += inputArr[i][1];
	console.log(":"+inputArr[i][1]); // printing marks
	if(totalCount === countArray[countIndex]) {
		console.log("Total : "+sum);
		totalCount = 0;
		sum = 0;
		countIndex++;
	}
}