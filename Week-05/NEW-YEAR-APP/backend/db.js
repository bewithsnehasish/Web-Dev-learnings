const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://bewithsnehasish:coding@cluster0.hxmsinw.mongodb.net/backendTodo")

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}