//send request to other HTTP server and work with the server 

//We will use another HTTP library that is "fetch"
// const fetch = require("node-fetch");
// const fetch = require('node-fetch');
// function callbackFn(result){
//     console.log(result)
// };

function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponseBody)
}

var sendObj = {
    method: "GET"
};



fetch("http://localhost:3000/handlesum?counter=10", sendObj).then(callbackFn)