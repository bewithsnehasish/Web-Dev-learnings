//Function in JavaScript
/*
function printAllUsers(users){
    for(var i = 0; i < users.length ; i++){
        const toLog = users[i].name + "'s age is " + users[i].age;
        console.log(toLog)
    }
}

var users = [
    {name: "harkirat",age:21},
    {name: "raman",age: 10}
];

printAllUsers(users)
*/

//Making a function to do arithmetic operations

function divide(num1,num2){
    return num1 / num2 ;
}

function sum(num1,num2){
    return num1+num2 ;
}

function multiply(num1,num2){
    return num1*num2 ;
}

function substraction(num1,num2){
    if(num1>num2){
        return num1 - num2 ;
    } 
    else if(num2>num1){
        return num2 - num1 ;
    } 
}

function doArithmetic(num1,num2,whatToDo){
    var ans = whatToDo(num1,num2)
    return ans ;
}

var answer = doArithmetic(1,2,substraction)
console.log(answer)



