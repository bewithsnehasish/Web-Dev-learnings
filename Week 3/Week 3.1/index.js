// Different ways of calling the Callback Functions

// 1st Way

const fs = require("fs");

function callback(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",callback)


// 2nd Way for using the Callbacks
 
const fs = require("fs");

fs.readFile("a.txt","utf-8",function callback(err,data){console.log(data);
})


//3rd wau for using the Callbacks function 

// const fs = require("a.txt");

// fs.readFile("a.txt","utf-8",function(err,data)) => {
//     console.log(data);
// }


//Functions which we use 
// function ch(req, res){
//     res.json([]);
// }
// app.get("/todos",cb)
// //Modified Version
// app.get("/todos",(req, res){
//     res.json([]);
// }));
