//This is a sample code for using the Aisles.json
// just test

var fs = require("fs")
var contents = fs.readFileSync("./Aisles.json");
var data = JSON.parse(contents);
console.log(data.Breakfast.Quaker_oak);
