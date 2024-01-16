const express = require("express");
const zod = require("zod")

const app = express()
app.use(express.json())

// const schema = zod.array(zod.number());
//
// {
//     email: string => null;
//     password: atleast 8 letters 
//     country : "IN", "US"
// }

const schema = zod.object({
    email: zod.string(),
    password : z.string(),
    country:z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.post("/healthcheckup", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(3000);
