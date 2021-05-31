var ctx = document.getElementById("myChart");
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
    	labels :["AAAAA","BBBBBBB","CCCCCC"],
    	datasets : [{
    		data :[10,13,10]
    	}]
    }
});
