// import the language driver
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
  // Connection URL for local mongodb server
var url = 'mongodb://127.0.0.1:27017/UPES';  //database name

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  
  //ensure we've connected
  assert.equal(null, err);
  
  var Data = db.collection('event'); //collection name
  
  //insert new document to bank_data collection
  Data.insert({
    name: 'Energy Block',
    latitude: '30.415884',
    longitude: '77.967013',
    description: 'It is the central control of the university.It holds the administrative section and HODs of different sectors',
    eventinarea: 'Conference'
  }, function(err, result){
      //callback is executed after mongodb confirms insert
    if(err){
      return console.error(err);
    }
    console.log('inserted: ');
    console.log(result);
    console.log('inserted ' + result.length + ' docs');
  });
 Data.insert({
     name : 'CIT',
     latitude : '30.417170',
     longitude : '77.968043',
     description : 'It is the Information technology center of the college having the UPES server',
     eventinarea : 'Coding'
  }, function(err, result){
      //callback is executed after mongodb confirms insert
    if(err){
      return console.error(err);
    }
    console.log('inserted: ');
    console.log(result);
    console.log('inserted ' + result.length + ' docs');
  });
  Data.insert({
     name : 'Labs',
     latitude : '30.416241',
     longitude : '77.969981',
     description : 'This area consist of diffrent labs of various sectors',
     eventinarea : 'Test and Analysis'
  }, function(err, result){
      //callback is executed after mongodb confirms insert
    if(err){
      return console.error(err);
    }
    console.log('inserted: ');
    console.log(result);
    console.log('inserted ' + result.length + ' docs');
  });
  Data.insert({
     name : 'Sports',
     latitude : '30.418516',
     longitude : '77.968100',
     description : 'This is the sports and games center of the UPES with the sports ground and other amenities',
     eventinarea : 'Circket'
  }, function(err, result){
      //callback is executed after mongodb confirms insert
    if(err){
      return console.error(err);
    }
    console.log('inserted: ');
    console.log(result);
    console.log('inserted ' + result.length + ' docs');
  });
  Data.insert({
     name : 'Fire',
     latitude : '30.416088',
     longitude : '77.970424',
     description : 'This area consist of Fire and Safety labs with multiple hazard and helth protective equipments',
     eventinarea : 'Fire Drill'
  }, function(err, result){
      //callback is executed after mongodb confirms insert
    if(err){
      return console.error(err);
    }
    console.log('inserted: ');
    console.log(result);
    console.log('inserted ' + result.length + ' docs');
  return db.close();
  });
});