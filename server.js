
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const database= require('./data/mongoDbHelper.service.ts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/dist/event-manager-app'));

app.get('/', function(req,res) {   
res.sendFile(path.join(__dirname+'/dist/event-manager-app/index.html'));
});

app.get('/GetAll', function(req,res){
    var data= database.GetAllData(req.query.collection)
    res.json()
    res.end()
})

app.listen(process.env.PORT || 8080);