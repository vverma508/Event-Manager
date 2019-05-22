
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
        res.json(data)
        res.end()
    })
})

app.delete('/delete', function(req,res){
    var query={EventId:parseInt(req.query.id)};
    database.Delete(req.query.collection,query).then((data)=>{
        res.json(data)
        res.end()
    })
})

app.post('/event', function(req,res){
     database.InsertOneRow(req.query.collection, req.body).then((data)=>{
        res.json(data)
        res.end()
    });
})

app.post('/update',function(req,res){
    var query={EventId:parseInt(req.body.EventId)}
    var newvalues = { $set: {Name:req.body.Name
    ,Description:req.body.Description
    ,Venue:req.body.Venue
    ,EventDate:req.body.EventDate
    ,Joinee:req.body.Joinee
    } };
    database.Update(req.query.collection,query, newvalues).then((data)=>{
        res.json(data)
        res.end()
    });
})
app.listen(process.env.PORT || 8080);