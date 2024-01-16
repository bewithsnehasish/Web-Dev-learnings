const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json());


function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)


//Sending request data using Json
/*
function givePage(req,res){
    var obj={
        "ley":"asndadf",
    };
    res.send(obj)
}
app.get('/',givePage)
*/

//Sending request using HTML
/*
function givePage(req,res){
    res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    <i><b>hi there</b></i>
</body>`)
}
app.get('/',givePage)
*/

//Sending request using Plain Text
function givePage(req,res){
    res.send("obj")
}

app.get('/',givePage)