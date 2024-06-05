const express = require("express");
const { stat } = require("fs");
const app = express();
const port = 8080;
const path = require("path")
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "You can learn about Delta"
    },
    {
        id : uuidv4(),
        username : "snehsish",
        content : "You can learn about web dev"
    },
    {
        id : uuidv4(),
        username : "bewithsnehasish",
        content : "You can learn about my github"
    },
    {
        id : uuidv4(),
        username : "twitter",
        content : "You can learn about web deevlopment"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
})

app.post("/posts",(req,res) =>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    console.log(req.body);
    // res.send("post request working"); 
    res.redirect("http://localhost:8080/posts");
});


app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // console.log(id);
    // console.log(newContent);
    res.send("path request working")
})




app.listen(port,()=>{
    console.log("listening to the port: 8080")
})

