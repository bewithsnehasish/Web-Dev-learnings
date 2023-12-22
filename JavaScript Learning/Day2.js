//hey my name is Snehasish => ["my","name","is","Snehasisih"]

// ["my","name","is","harkirat"]; => "my name is snehasish"

///stringFromArray , arrayFromString
/*
function sort(str){
    var array = str.split(" ");
    return array;
}

var ans = arrayFromString("my name is Snehasish")
console.log(ans)


*/

// Now back string from array


// function stringFromArray(str){
//     var array = str.join(" ");
//     return array
// }

// var ans = stringFromArray(["my","name","is","Snehasisih"])
// console.log(ans)


//Assignment Solving 
/*
function solve(input){
    var keys = Object.keys(input);
    var answer = [];
    for (var i = 0 ; i < keys.length; i++){
        var category = keys[i];
        answer.push({
            category:category,
            amountSpent:input[category]
        })
    }
    console.log(answer);
}

var solution = solve({Drink : 70 , Food: 10});

*/

function solve(transactions){
    var spendEstimates = {};

    for (var i = 0 ; i<transactions.lenght; i++){
        var t = transactions[i];
        if(spendEstimates[t.category]){
            spendEstimates[t.category]= spendEstimates[t.category]+t.price;
        }else
        spendEstimates[t.category] = t.price 
    }
}

var transactions = [
    {
        itemname : "Pepsi",
        category : "Drink",
        price: 20,
        timestamp : "12-june-2022"
    },
    {
        itemname : "Mirinda",
        category : "Drink",
        price: 20,
        timestamp : "12-june-2022"
    },
    {
        itemname : "Samosa",
        category : "Food",
        price: 20,
        timestamp : "12-june-2022"
    }
]