const fs = require("fs");
const express = require("express")


function callbackFn(err,data){
    console.log(data)
}

fs.readFile("a.txt","utf-8",callbackFn);
// npm = Node package Manager 

// function calculateSum(counter){
//     var sum = 0
//     for(var i = 0 ; i < counter ; i++){
//         sum = sum + i ;
//     }
//     return sum;
// }

// var calculatedSum = calculateSum(100);
// console.log(calculatedSum)

//Express Js 
//Express help us to build nice HTTP servers

