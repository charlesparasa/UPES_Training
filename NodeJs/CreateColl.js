// Program to insert data in MongoDb 
// Reference from official Mongo Documentation
// Code is working properly 
// Also working on the rest of CRUD operations

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('Jashan');
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1);

  collection.insert(doc2, {w:1}, function(err, result) {});

  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});

  console.log("It's done!");

});
