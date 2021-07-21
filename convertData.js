const data = require("./earthquake.json");
const fs = require('fs');

let dataString = '[';
console.log('Number of data is ', data.length);
data.forEach(function(item) {
	dataString += item.latitude + ',' + item.longitude + ',' + item.mag/(Math.pow(10, 7 - item.mag)) + ',';
});
dataString = dataString.slice(0, -1);
dataString += ']';
fs.writeFile('earth.json', dataString, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('File is saved successfully');
	}
});