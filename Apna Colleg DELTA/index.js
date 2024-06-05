const express = require("express");
const { stat } = require("fs");
const app = express();
const port = 8080;
const path = require("path")

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : "2a";,
        username : "apnacollege",
        content : "You can learn about Delta"
    },
    {
        username : "snehsish",
        content : "You can learn about web dev"
    },
    {
        username : "bewithsnehasish",
        content : "You can learn about my github"
    },
    {
        username : "twitter",
        content : "You can learn about web deevlopment"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res) =>{
    let {username,content} = req.body;
    posts.push({username,content});
    console.log(req.body);2
    // res.send("post request working"); 
    res.redirect("http://localhost:8080/posts");
})
app.listen(port,()=>{
    console.log("listening to the port: 8080")
})

