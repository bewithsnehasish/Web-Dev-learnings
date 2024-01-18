const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        req.statusCode(411).json({
            msg: "Hey you sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created!!!"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    console.log(todos);
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.updateMany({
        id: req.body.id
    },{
      completed:true  
    })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
