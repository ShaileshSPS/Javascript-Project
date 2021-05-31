var myObj = {"name": "John", "age": 31, "city": "New York"};
// console.log(myObj.name)

var myObj = {"name": "John", "age": 31, "city": "New York"};
myObj = JSON.stringify(myObj); // converting json object to string

var myObj = '{"name": "John", "age": 31, "city": "New York"}';
myObj = JSON.parse(myObj); // converting string to json object
// console.log(myObj.name)


var myObj = {
	"name": "John", 
	"age": function() {
		return 30;
	}, 
	"city": "New York"
};
// console.log(myObj.age());


// Remove dublicates from array of objects
var arr = [
	{"name": "shailesh"},
	{"name": "rahul"},
	{"name": "shailesh"},
]

var newArr = [];
var obj = {};

for(i in arr) {
	var name = arr[i].name;
	obj[name] = arr[i];
}
for(i in obj) {
	newArr.push(obj[i]);
}
//console.log(newArr)


var things = new Object();
things.thing = new Array();
things.thing.push({place:"here",name:"stuff"});
things.thing.push({place:"there",name:"morestuff"});
things.thing.push({place:"there",name:"morestuff"});

// assign things.thing to myData for brevity
var myData = things.thing;
// things.thing = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
things.thing = [... new Set(myData.map(JSON.stringify))].map(JSON.parse);
// console.log(things.thing)



var uniq = {}
var arr  = [{"id":"1"},{"id":"1"},{"id":"2"},{"id":"3"},{"id":"3"}]
var arrFiltered = arr.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
// console.log(arrFiltered)



str =[
	{"item_id":1},
	{"item_id":2},
	{"item_id":2}
]

obj =[]
for (x in str){
    if(check(str[x].item_id)){
        obj.push(str[x])
    }   
}
function check(id){
    flag=0
    for (y in obj){
        if(obj[y].item_id === id){
            flag =1
        }
    }
    if(flag == 0) return true
    else return false

}
//console.log(obj)