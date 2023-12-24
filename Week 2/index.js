const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter){
    var sum = 0
    for(var i = 0 ; i < counter ; i++){
        sum = sum + i ;
    }
    return sum;
} 

function handleFirstRequest(req,res){
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum)
    var answer = "The Calculated Sum of the numbers in the range 0 to 100 is " + calculatedSum;
    res.send(answer);
}

function checkname(degree){
    if (degree == "AI"){
        return("Hello My name is Vaibhav Tamang \n I am studying from Lovely Professinal university \n My Present Goal is to learn Full Stack in Web Development \n Presently pursuing specialization in AI & Data Engineering")
    }
    else if (degree == "CSE"){
        return("Hello my name is Snehasish Mandal \n I am studying from Lovely Professional University \n My Present goal is to contribute in the public and learn to do new Contributions \n Presently pursuing Core Computer Science Engineering")
    }
}

function printMyName(req,res){
    var printMyName = checkname("AI");
    console.log(printMyName);
    var answer = printMyName;
    res.send(answer);
}

app.get('/handlesum',handleFirstRequest);
app.get('/vaibhav',printMyName);

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)
// npm = Node package Manager 
