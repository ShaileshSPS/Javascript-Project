// print 1 to 10 without any loop
var i=1;
callbackDemoFunc = (callback) => {
	callback();
}

print = (callback) => {
	if(i<=10) {
		console.log(i);
		i++;
		callbackDemoFunc(print);
	}
}

callbackDemoFunc(print);