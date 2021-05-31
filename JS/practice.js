// sort words in a string
function sortString(str){
  var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
}
// console.log(sortString("shailesh"));

function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}
// console.log(sortString("shailesh"));
/* 
let arr = ["ok", "eat", "nair", "king", "ko", "ate", "rain", "tea"];
["ok", "ko"]
["eat", "ate"]
["nair", "rain"]
["king"]
*/
let arr = ["ok", "eat", "nair", "king", "ko", "ate", "rain", "tea", "rani"];
var outputArr = [];
for(var i=0;i<arr.length;i++) {
	var element = arr[i];
	var innerArr = [];
	innerArr.push(arr[i]);
	for(var j=i+1;j<arr.length;j++) {
		if(arr[j].length === element.length && sortString(arr[j]) === sortString(element)){
			innerArr.push(arr[j]);
			arr.splice(j, 1);
			j--;
		}
	}
	outputArr.push(innerArr);
}
// console.log(outputArr);

function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

// solution using object
var arr = ["ok", "eat", "nair", "king", "ko", "tea", "rain", "ate"];
var sortedWord;
var sortedObj = {};
var innerArr = [];
var outputArr = [];
for(var i=0; i<arr.length; i++) {
  sortedWord = (((arr[i].toUpperCase()).split("")).sort()).join("");
  if(sortedObj.hasOwnProperty(sortedWord)) {
    sortedObj[sortedWord].push(i);
  } else {
    sortedObj[sortedWord] = [i];
  }
}
for(const key in sortedObj) {
  innerArr = [];
  for(var j=0; j<(sortedObj[key]).length;j++) {
    innerArr.push(arr[sortedObj[key][j]]);
  }
  outputArr.push(innerArr);
}
// console.log(outputArr);


// var arr = [1,2,3,4,5,6,7]; target = 5; // two sum
var arr = [1,2,3,4,5,6,7], target = 5;
var outputArr = [];
for(var i=0;i<arr.length;i++) {
	var complement = target - arr[i]; 
	if(arr.includes(complement)) {
		var innerArr = [];
		innerArr.push(arr[i]);
		innerArr.push(complement);
		// innerArr.push(arr.indexOf(arr[i]));
		// innerArr.push(arr.indexOf(complement));
		outputArr.push(innerArr);
	}
}
// console.log(outputArr);

// three sum
var arr = [1,2,3,4,5,6,7], target = 9;
var outputArr = [];
for(var i=0;i<arr.length;i++) {
	var outerArr = [];
	for(j=i+1;j<arr.length;j++) {
		var innerArr = [];
		for(k=j+1;k<arr.length;k++) {
			if(arr[i]+ arr[j] + arr[k] === target) {
				innerArr.push(arr[i]);
				innerArr.push(arr[j]);
				innerArr.push(arr[k]);
			}
		}
		if(innerArr.length > 0) {
			outerArr.push(innerArr);	
		}
		
	}
	if(outerArr.length > 0) {
		outputArr.push(outerArr);
	}
}
// console.log(outputArr);

// two sum and three sum
var arr = [1,2,3,4,5,6,7,8,9], target = 9;
var outputArr = [];
for(var i=0;i<arr.length;i++) {
	var outerArr = [];
	var innerArrJ = [];
	for(j=i+1;j<arr.length;j++) {
		var innerArrK = [];
		if(arr[i]+ arr[j] === target) {
			innerArrJ.push(arr[i]);
			innerArrJ.push(arr[j]);
		}
		for(k=j+1;k<arr.length;k++) {
			if(arr[i]+ arr[j] + arr[k] === target) {
				innerArrK.push(arr[i]);
				innerArrK.push(arr[j]);
				innerArrK.push(arr[k]);
			}
		}
		if(innerArrK.length > 0) {
			outerArr.push(innerArrK);	
		}
		
	}
	if(innerArrJ.length > 0) {
		outerArr.push(innerArrJ);	
	}
	if(outerArr.length > 0) {
		outputArr.push(outerArr);
	}
}
console.log(outputArr);