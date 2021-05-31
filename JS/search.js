//Linear Search
var arr = [10, 100, 20, 50, 40];
var foundFlag = false;
var element = 20;

arr.forEach(function(item) {
	if (item == element) {
		foundFlag = true;
	}
});
// console.log(foundFlag);



// Binary Search
var arr = [10, 100, 20, 50, 40];
arr.sort(function(a, b){
	return a - b
});
var foundFlag = false;
var element = 30;

var low = 0;
var high = arr.length - 1;

while (low <= high) {
	var mid = Math.floor((low + high) / 2);

	if (arr[mid] == element) {
		foundFlag = true;
		break;
	}
	else if(arr[mid] < element) {
		low = mid + 1;
	}
	else {
		high = mid - 1;
	}
}
console.log(foundFlag);
