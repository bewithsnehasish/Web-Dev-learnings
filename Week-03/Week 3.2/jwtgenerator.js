const jwt = require("jsonwebtoken")
const express = require("express");
const { json } = require("express");

//to use node express as a function
/**const app = express()
app.use(express.json())
**/
express().use(express.json()); //another way works the same

// decode,verify , generate 

const value ={
    name : "harkirat",
    accountNumber : 123123123
}

//jwt 

const token = jwt.sign(value, "secret");
console.log(token);