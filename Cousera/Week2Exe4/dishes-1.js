/**
 * Created by jacka on 7/13/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  // timestamp for the schema
  timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;