
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const database= require('./data/mongoDbHelper.service.ts').DataHelper;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/dist/event-manager-app'));

app.get('/', function(req,res) {   
res.sendFile(path.join(__dirname+'/dist/event-manager-app/index.html'));
});

app.get('/GetAll', function(req,res){
 database.GetAllData(req.query.collection).then((data)=>{
        res.json(data)
        res.end()
    })

})
app.get('/Get', function(req,res){
    var query={EventId:parseInt(req.query.id)};
    database.FindOne(req.query.collection,query).then((data)=>{
        console.log(data)
        res.json(data)
        res.end()
    })
})

app.delete('/delete', function(req,res){
    database.delete(req.query.collection,req.query.id).then((data)=>{
        console.log(data)
        res.json(data)
        res.end()
    })
})

app.post('/event', function(req,res){
     database.InsertOneRow(req.query.collection, req.body).then((data)=>{
        console.log(data)
        res.json(data)
        res.end()
    });
})

app.post('/update',function(req,res){
    var query={EventId:parseInt(req.body.EventId)}
    database.Update(req.query.collection,query, req.body).then((data)=>{
        console.log(data)
        res.json(data)
        res.end()
    });
})
app.listen(process.env.PORT || 8080);