const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

//app.use(middleware1);
app.use(bodyParser.json())

function middleware1(req,res,next){
    console.log("from inside middleware " + req.headers.counter);
    // res.send("Error from inside middleware(UserAuthentication error")
    next();
}

app.use(middleware1);

function calculateSum(counter){
    var sum = 0
    for(var i = 0 ; i <= counter ; i++){
        sum = sum + i ;
    }
    return sum;
} 


//Response Handler using 2 parameters
function calculateMul(counter){
    var answer = 0 ;
    for (var i = 1 ; i <= counter ; i++){
        answer = answer * i ;
    }
    return answer ;
}
/*
function handleFirstRequest(req,res){
    console.log(req.headers);
    var counter = req.headers.counter;
    // var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    console.log(calculatedSum)
    var answer = `The Calculated Sum of the numbers in the range 0 to ${counter} is ` + calculatedSum;
    res.send(answer);
}*/

/*
function handleFirstRequest(req,res){
    var counter = req.body.counter;
    
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculatedMul(counter);

    console.log(calculatedSum)
    var answer = `The Calculated Sum of the numbers in the range 0 to ${counter} is ` + calculatedSum;
    res.send(answer);
}
*/

function handleFirstRequest(req,res){
    var counter = req.body.counter;
    
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    // var stringAnswer = "sum is "+ calculateSum + " and out is "+calculatedMul;

    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul,
    };

    // res.json(answerObject)
    res.status(200).send(answerObject);

}



// app.get('/handlesum',handleFirstRequest);
app.post('/handlesum',handleFirstRequest);


function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)
// npm = Node package Manager 
