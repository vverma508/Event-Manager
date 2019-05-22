var mongoCLient = require('mongodb').MongoClient;
var promise= require('bluebird');
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

var InsertOneRowFn = function(collection,data){

    return new promise((resolve,reject)=>{
        var dataCollection= database.collection(collection);
        dataCollection.insertOne(data);
        resolve(true);
    })

}

var GetAllDataFn = function(collection){
    return new promise((resolve,reject)=>{
    var dataCollection= database.collection(collection);
    dataCollection.find().toArray(function(err, items) {
         if (!err){
            resolve(items);
         } 
         reject(err);
    });
})
}

var GetAllDataByQueryFn = function(collection, query){
    return new promise((resolve,reject)=>{
    var dataCollection= database.collection(collection);
    dataCollection.find(query).toArray(function(err, items) {
         if (!err){
            resolve(items);
         } 
         reject(err);
    });
})
}

var FindOneFn = function(collection, query){
    return new promise((resolve,reject)=>{
    var dataCollection= database.collection(collection);
    console.log(query);
    dataCollection.findOne(query,function(err, items) {
        if (!err){
           resolve(items);
        } 
        reject(err);
   });
})
}

var DeleteFn= function(collection, query){
    return new promise((resolve,reject)=>{
    var dataCollection= database.collection(collection);
    dataCollection.deleteOne(query,function(err, items) {
         if (err){
            reject(err);
         } 
         resolve(true);
    });
})
}

var UpdateFn = function(collection, query,data){

    return new promise((resolve,reject)=>{
        var dataCollection= database.collection(collection);
        dataCollection.updateOne(query,data,function(err, res){
            if (err) reject(err);
            resolve(true);
        });

    })
}


exports.DataHelper={
    InsertOneRow:InsertOneRowFn,
    GetAllData:GetAllDataFn,
    GetAllDataByQuery:GetAllDataByQueryFn,
    FindOne:FindOneFn,
    Delete:DeleteFn,
    Update:UpdateFn
}
