const zod = require('zod');


function validateInput(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

function validateInputmail(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

//if this is an array of strings, return true , else return false 

//we have to iterate over every iteration if we use this type of function otherwise using zod it is pretty easier 
/**
 @function validateInput(arr){
    if(typeof arr == "object" && arr.length >= 1 && typeof arr[0] == "number" && arr.every((item) => typeof item == "number")){

    }
}
**/

validateInput([1,2,3]);

validateInputmail({
    email: "harkirat@gmail.com",
    password: "134531212"
})
