var mongoCLient = require('mongodb').MongoClient;
var dbUrl = process.env.mongoDbUrl || require('../appsettings.json').mongoDbUrl;
var database;
mongoCLient.connect(dbUrl, function(err, db) {

    if (err != null) {
        console.log("Error while connecting to DB. Error msg: " + err.message);
        db.close();

    } else {
        database = db;
        console.log("Database is online!");
    }

});

exports.InsertOneRow= function(collection,data){

    var dataCollection= database.collection(collection);
    dataCollection.insertOne(data);
    return true;
}

exports.GetAllData = function(collection){
    var dataCollection= database.collection(collection);
    dataCollection.find().toArray(function(err, items) {
         if (!err){
             return items;
         } 
         return err;
    });
}

exports.GetAllDataByQuery = function(collection, query){
    var dataCollection= database.collection(collection);
    dataCollection.find(query).toArray(function(err, items) {
         if (!err){
             return items;
         } 
         return err;
    });
}

exports.FindOne = function(collection, query){
    var dataCollection= database.collection(collection);
    dataCollection.findOne(query).toArray(function(err, items) {
         if (!err){
             return items;
         } 
         return err;
    });
}

exports.Delete= function(collection, query){
    var dataCollection= database.collection(collection);
    dataCollection.deleteOne(query,function(err, items) {
         if (err){
            throw  err;
         } 
         return true;
    });
}