const express = require('express');
var router = express.Router();
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

router.post('/sum', function(request,response){

    var n1 = request.body.num1;
    var n2 = request.body.num2;
    // console.log(JSON.stringify(request.params))
    var inte1 = parseInt(n1, 10);
    var inte2 = parseInt(n2, 10);

    console.log(""+inte1+inte2);
    response.status(200).send((parseInt(inte1+inte2)).toString()); 
});

router.post('/sub', function(request,response){

    var n1 = request.body.num1;
    var n2 = request.body.num2;
    // console.log(JSON.stringify(request.params))
    var inte1 = parseInt(n1, 10);
    var inte2 = parseInt(n2, 10);

   // console.log(""+inte1+inte2);
    response.status(200).send((parseInt(inte1-inte2)).toString());
});

router.post('/mul', function(request,response){

    var n1 = request.body.num1;
    var n2 = request.body.num2;
    // console.log(JSON.stringify(request.params))
    var inte1 = parseInt(n1, 10);
    var inte2 = parseInt(n2, 10);

    //console.log(""+inte1+inte2);
    response.status(200).send((parseInt(inte1*inte2)).toString());
});

router.post('/div', function(request,response){

    var n1 = request.body.num1;
    var n2 = request.body.num2;
    // console.log(JSON.stringify(request.params))
    var inte1 = parseInt(n1, 10);
    var inte2 = parseInt(n2, 10);

   // console.log(""+inte1+inte2);
    
    response.status(200).send((parseInt(inte1/inte2)).toString());
    
});
module.exports = router; 




