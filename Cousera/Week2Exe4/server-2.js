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

  Dishes.create({
    name: 'Uthapizza',
    description: 'Test'
  }, function (err, dish) {
    if (err) throw err;
    console.log("Dish Created!");
    console.log(dish);

    var id = dish._id;

    setTimeout(function () {
      Dishes.findByIdAndUpdate(id, {
        $set: {
          descrption: "Updated Test!"
        }
      }, {
        // return the updated entry
        new: true
      }).exec(function (err, dish) {
        if (err) throw err;
        console.log('updated Dish!');
        console.log(dish);

        db.collection('dishes').drop(function () {
          db.close();
        });
      })
    }, 3000);
  });
});