/**
 * Created by jacka on 7/9/2016.
 */
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dboper  = require('./operations');

var url = 'mongodb://localhost:27017/conFusion';
// Connect URL
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connect correctly to server");

  dboper.insertDocument(db, {name:"Vadonut", description: "Test"},
  "dishes", function(result) {
      console.log(result.ops);

      dboper.findDocuments(db, 'dishes', function(docs) {
        console.log(docs);
        dboper.updateDocument(db, {name:'Vadonut'}, {description:"Updated Test"},
        "dishes", function (result) {
            console.log(result.result);
            dboper.findDocuments(db, "dishes", function (docs) {
              console.log(docs);
              // db.dropCollection("dishes", function (result) {
              //   console.log("Result = " + result);
              //
              //   db.close();
              // });
            });
          });
      });
    });
});