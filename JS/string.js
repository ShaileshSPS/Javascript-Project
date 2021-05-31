// Reverse a string
var str = 'hello';
var arr = str.split("");
var result = "";

for (var i = arr.length - 1; i >= 0; i--) {
	result = result + arr[i];
}
//console.log(result)


var str = 'hello';
var result = "";

for (var i = str.length; i >= 0; i--) {
	result = result + str.charAt(i);
}
// console.log(result)


// Reverse a sentence
var str = "How are you doing today?";
var arr = str.split(" ");
var result = "";

for (var i = arr.length - 1; i >= 0; i--) {
	result = result + arr[i] + " ";
}
// console.log(result)


// count the occurence of characters in a string
var str = 'helllo';
var map = new Map();

for (var i = 0; i < str.length; i++) {
	if(!map.has(str.charAt(i))) {
		map.set(str.charAt(i), 1);
	}
	else {
		var value = map.get(str.charAt(i));
		map.set(str.charAt(i), value=value+1);
	}	
}
//console.log(map);

// count occurence of words in a sentence.
var str = 'How are you is at are is';
var arr = str.split(" ");
var map = new Map();

for (var i = 0; i < arr.length; i++) {
	if(!map.has(arr[i])) {
		map.set(arr[i], 1);
	}
	else {
		var value = map.get(arr[i]);
		map.set(arr[i], value=value+1);
	}	
}
//console.log([...map]);