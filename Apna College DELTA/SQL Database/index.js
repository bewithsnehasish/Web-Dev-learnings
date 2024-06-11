const { faker, da, tr } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path")


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "root",
});

app.use(express.static(path.join(__dirname,"public")));



let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// let q = "SHOW TABLES;"
// // Inserting New Data into the Database;
// let q = "INSERT INTO user( id, username, email, password ) VALUES ?;"
// // let users  = [
// //   ["123b", "123b_newuser","abc2@gmail.com","abc2"],
// //   ["123c", "123c_newuser","abc3@gmail.com","abc3"],
// // ];

// let data = [];
// for(let i=1; i <= 100; i++){
//   data.push(getRandomUser()); // 100 fake users data
// }


// try{
//   connection.query(q,[data], (err,result) => {
//       if(err) throw err;
//       console.log(result);
//       // console.log(result.length);
//       // console.log(result[0]);
//     });  
// } catch (err) {
//   console.log(err);
// }
// connection.end();


//Home page route
app.get("/",(req,res) => {
  let q = `SELECT count(*) FROM user`
  try{
    connection.query(q,(err,result) => {
      if(err) throw err ;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    })
  }catch(err){
    res.send("some error occured");
  }
});


// To print all the user in the database 
app.get("/user",(req,res) => {
  let q = `SELECT * FROM user;`;
  try{
    connection.query(q,(err,users) => {
      if(err) throw err ;
      // console.log(users);
      // res.send(users);
      res.render("showusers.ejs", { users })
    })
  }catch(err){
    res.send("Some error is coming in the Database");
  }
})

// To edit data of the Users Route 
app.get("/user/")


app.listen("8080",() => {
  console.log("Server is running on the port number 8080");
});