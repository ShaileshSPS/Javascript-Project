var arr = [1,2,3,4,5];
var resultReduce = arr.reduce((temp, item) => {
	return temp * item;
}, 1)
console.log(resultReduce); // 120


// Custom Reduce 
var arr = [1,2,3,4,5];
var callbackReduce = (iniValue, curValue) => iniValue * curValue;

var customReduce = (arr, customReduce, initialValue) => {
	var result = initialValue;
	for(let i=0;i<arr.length;i++) {
		result = callbackReduce(result, arr[i]);
	}
	return result;
}

var reduceResult = customReduce(arr, customReduce, 1);
console.log(reduceResult);

// Custom Reduce  
var arr = [1,2,3,4,5];
var callbackReduce = (iniValue, curValue) => iniValue * curValue;

Array.prototype.customReduce = function(customReduce, initialValue) {
	var result = initialValue;
	for(let i=0;i<this.length;i++) {
		result = callbackReduce(result, this[i]);
	}
	return result;
}

var reduceResult = arr.customReduce(customReduce, 1);
// var reduceResult = arr.customReduce((iniValue, curValue) => iniValue * curValue, 1); // works
console.log(reduceResult);