const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=> {
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('7mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
    });

const User = mongoose.model("Users", userSchema);

//To print and add data into the database in single number
// const user1 = new User({ 
//     name : "Adam",
//     email: "adma@yahoo.com",
//     age: 54,
// })

// const user2 = new User({ 
//     name : "Snehasish",
//     email: "sneh@yahoo.com",
//     age: 20,
// })


// To insert One data into the system
// user2.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// user1.save();


//To Insert many user in a Database;

// User.insertMany([
//     {name: "Tony", email:"mandal@hotmail.com",age: 32},
//     {name: "Natasha", email:"natasha@hotmail.com",age: 26},
//     {name: "Peter Parker", email:"parker@hotmail.com",age: 19},
// ]).then((res)=>{
//     console.log(res);
// });


//To find Users in a database or Cluster or any collections 
 
// User.find({age:{$gt: 21}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//To find a single user from the database

// User.findOne({age:{$gt: 21}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//To find user with its id 

// User.findById("666ad1f31b402b3dfa60c85d").then((res)=>{
//     console.log(`User found in the Database \n '${res}'`)
// }).catch((err)=>{
//     console.log(err)
// })


//To update single data in moongose
// User.updateOne({name:"Tony"},{age: 23}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(`There is an error encountered in updating your database \n ${err}`)
// })

//To update all the data in moongose

// User.updateMany({age: {$gt:20}},{age: 33}).then((res)=>{
//     console.log(res);
// }).catch((err)=> {
//     console.log(err);
// })

//To find data and Update many data and then print the updated data 

// User.updateMany({age: {$gt: 45}},{age:33}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//To find and update a single data in the database

//if we keep the value of the query as new then it returns the modified document in the place of the new document 


// User.findOneAndUpdate({name: "Adam"},{name: "Bulldog", age : 60},{new: true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(data);
// })



// Delete data in the mongoose

// User.deleteOne({name: "Bulldog"}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

// // To delect multiple or many user from the database

// User.deleteMany({age: {$gt: 32}}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })


// To print data which is going to delete from teh Database we can use below two commands;

// User.findByIdAndDelete("666aba44b373a282b793494c").then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//Schema Validations

