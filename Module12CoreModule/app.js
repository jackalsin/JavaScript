/**
 * Created by jacka on 6/8/2016.
 */
var fs = require('fs');

fs.writeFileSync("corner.txt", "Corn is good, corn is life");

console.log(fs.readFileSync("corner.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/idnex.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout)); // prev part
console.log(path.basename(websiteAbout)); // end part
console.log(path.extname(websiteAbout));

setInterval(function () {
    console.log("beef")
}, 2000); // it runs every 2000 ms

console.log(__dirname);
console.log(__filename);