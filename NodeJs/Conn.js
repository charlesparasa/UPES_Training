// Connection to the database
// using mongodb driver
// Still tinkering with mongoose driver
// "npm install mongodb -- save" to download mongodb driver for the file 
// global install of mongodb didn't work , don't know why 
// The code is executed and working
// refrence from the official documentation of mongodb 


var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/Persons", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
