const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

var person ={
    name: 'Dhruval',
    sem: 4,
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//router goes here
app.get('/', function(req, resp){
    resp.send("welcome");
    
});            

var resRoute = require('./router/result');
app.use('/result', resRoute);    

app.listen(3000, function(){
    console.log('app started');
});


