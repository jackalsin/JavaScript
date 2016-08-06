var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  console.log("Connected to mongodb server");

  // initialize company
  Dishes.create({
    name:"a",
    description: "Test"
  }, function (err, dish) {
    if (err) throw err;
    console.log("Dish Created!");
    console.log(dish);

    var id = dish._id;
    console.log("Created dish id = " + id);
  });

});
