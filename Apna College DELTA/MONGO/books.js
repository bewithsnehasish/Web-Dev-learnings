const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=> {
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type: String,
    },
    price : {
        type: Number,

    },
    discount: {
        type:Number,
        default:0,
        max:100,
    },
    category: {
        type: String, 
        enum: ["fiction","non-fiction"]
    }
});


const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics RD Sharma",
//     author: "Rd Sharma",
//     price: 1200,
// })

// let book2 = new Book({
//     title : "Mandal Mathematics",
//     author : "Snehasish Mandal",
//     price: "123",
//     discount: 32,
//     category: "fiction",
// })

// book1.save().then((res)=> {
//     console.log(res)
// }).catch((err)=>{
//     console.log(err.message)
// })

// book2.save().then((res)=> {
//     console.log(res)
// }).catch((err)=>{
//     console.log(err.message)
// });



// Update in the Database
// if we want to check the schema validator that it checks all the rules before the validation then it should check everything in the erros 
Book.findByIdAndUpdate("666aec35d4952eedc5f2fdfa",{price: -500},{runValidators: true}).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err.message)
})