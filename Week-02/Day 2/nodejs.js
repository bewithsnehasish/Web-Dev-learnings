const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json());

//Return using 2 Handlers
function calculateSum(counter){
    var sum = 0
    for(var i = 0 ; i <= counter ; i++){
        sum = sum + i ;
    }
    return sum;
} 

function handleFirstRequest(req,res){
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    var answerObject = {
        sum : calculatedSum,
    };
    res.send(answerObject);
}

app.get('/handlesum',handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port,started);