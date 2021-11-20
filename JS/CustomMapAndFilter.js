var points = [1.5,2.5,3.5,4.5,5.5];
var resultMap = points.map(point => point * point)
console.log(resultMap);

var resultFilter = points.filter(point => point > 3)
console.log(resultFilter);


// Custom Map 
var points = [1.5,2.5,3.5,4.5,5.5];
var callbackMap = (item) => item * item;

var customMap = (arr, callbackMap) => {
	var newArr = [];
	for(let i=0;i<arr.length;i++) {
			newArr.push(callbackMap(arr[i]))
	}
	return newArr;
}

var mapResult = customMap(points,callbackMap);
console.log(mapResult);

// Custom Filter 
var points = [1.5,2.5,3.5,4.5,5.5];
var callbackFilter = (item) => item > 3;

var customFilter = (arr, callbackFilter) => {
	var newArr = [];
	for(let i=0;i<arr.length;i++) {
		if(callbackFilter(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

var filterResult = customFilter(points,callbackFilter);
console.log(filterResult);


// Map
var points = [1.5,2.5,3.5,4.5,5.5];
var callbackMap = (item) => item * item;

Array.prototype.customMap = function(callbackMap) {
	var newArr = [];
	for(let i=0;i<this.length;i++) {
			newArr.push(callbackMap(this[i]));
	}
	return newArr;
}

var mapResult = points.customMap(callbackMap);
// var mapResult = points.customMap(point => point * point); //works
console.log(mapResult);


// Filter
var points = [1.5,2.5,3.5,4.5,5.5];
var callbackFilter = (item) => item > 3;

Array.prototype.customFilter = function(callbackFilter) {
	var newArr = [];
	for(let i=0;i<this.length;i++) {
		if(callbackFilter(this[i])) {
			newArr.push(this[i]);
		}
	}
	return newArr;
}

var filterResult = points.customFilter(callbackFilter);
console.log(filterResult);