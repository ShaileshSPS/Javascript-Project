var f1 = () => {
	var x = 10;
	var f2 = () => {
		var y = 20;
		var f3 = () => {
			var z = x + y;
			console.log(z);
		}
		f3();
	}
	f2();
}

f1();