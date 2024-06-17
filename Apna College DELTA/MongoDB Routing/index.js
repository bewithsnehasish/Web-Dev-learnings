const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended : true}));

main().then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

// let chat1 = new Chat({
//     from: "Neha",
//     to : "Priya",
//     msg : "Send me your exam sheets",
//     created_at : new Date(),
// })

// chat1.save().then((res)=>{
//     console.log(`Hence your chat is saved in the Database ${res}`)
// }).catch((err)=>{
//     console.log(`Hence you encountered an Error ${err.message}`)
// })


app.get("/",(req,res)=>{
    res.send("Root is working properly");
})

// Index Route 
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    // console.log(chats)
    res.render("index.ejs",{chats});
})

// New Route
app.post("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

// Create route
app.post("/chats",(req,res)=>{
    let { from,to,msg } = req.body;
    let newChat = new Chat({
        from : from,
        to : to , 
        msg : msg,
        created_at: new Date(),
    });
    newChat.save().then(res => {
        console.log("Chat has been saved to the database")
    }).catch((err)=> {
        console.log(err);
    })
    res.redirect("/chats");
})


// Edit Route 
app.get("/chats/:id/edit", (req, res) => {
    let { id } = req.params; // Destructure 'id' from req.params
    Chat.findById(id)
        .then(chat => {
            if (!chat) {
                return res.status(404).send("Chat not found");
            }
            res.render("edit.ejs", { chat });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
});



app.listen(8080,()=>{
    console.log("Server is listening at port 8080")
})