const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://bewithsnehasish:coding@cluster0.hxmsinw.mongodb.net/userappnew",{  useNewUrlParser: true,useUnifiedTopology: true, });

const db = mongoose.connection;

const User = mongoose.model('Users', { name: String,email: String, password:String});

app.post("/signup",async function(req,res){
    const username = req.body.username ;
    const password = req.body.password ;
    const name = req.body.name ;
    
    const exitsingUser = await User.findOne({email:username});
    //CRUD => Create,Read,Update,Delete
    if (exitsingUser){
        return res.status(400).send("Username already exits");
    }

    const user = new User({ 
        name: name,
        email: username,
        password: password
     });
    user.save().then(() => console.log('users saved'));//to save data to database
})



db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB!');
  });

app.listen(3000);

