const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


main().then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let chat1 = new Chat({
    from: "Neha",
    to : "Priya",
    msg : "Send me your exam sheets",
    created_at : new Date(),
})

chat1.save().then((res)=>{
    console.log(`Hence your chat is saved in the Database ${res}`)
}).catch((err)=>{
    console.log(`Hence you encountered an Error ${err.message}`)
})


app.get("/",(req,res)=>{
    res.send("Root is working properly");
})


app.listen(8080,()=>{
    console.log("Server is listening at port 8080")
})