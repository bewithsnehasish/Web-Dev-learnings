const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats = [
    {
        from: "Neha",
        to : "Priya",
        msg : "Send me your exam sheets",
        created_at : new Date()
    },
    {
        from: "Mona",
        to : "Snehasish",
        msg : "Let's see where our destination takes us",
        created_at : new Date()
    },
    {
        from: "Ayshi",
        to : "Sneh",  
        msg : "We were never meant to stay together",
        created_at : new Date()
    },
    {
        from: "Sanjana",
        to : "Debashiss",
        msg : "Send me your good spots",
        created_at : new Date()
    },
    {
        from: "Anurag",
        to : "Priyanshi",
        msg : "Send me what excuse you will make and give to me for my work",
        created_at : new Date()
    },
    {
        from: "Apple", 
        to : "Andriod",
        msg : "You cannot beat me in anyhow",
        created_at : new Date()
    }
]


Chat.insertMany(allChats);