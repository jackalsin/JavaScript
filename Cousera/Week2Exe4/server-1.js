/**
 * Created by jacka on 7/13/2016.
 */
var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'console error:'));

db.open('open', function () {
  // we are connected
  console.log("Connect correctly to server");

  var newDish = Dishes({
    name: 'Uthapizza',
    description:'Test'
  });
  // save the user
  newDish.save(function (err) {
    if (err) throw err;
    console.log('Dish created');
    // get all the users
    Dishes.find({}, function (err, dishes) {
      if (err) throw err;
      console.log(dishes);
      db.collection('dishes').drop(function () {
        db.close();
      });
    });
  });
});