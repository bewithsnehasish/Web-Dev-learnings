/**
 * @Problem_Statement
 * 
**/
const zod = require("zod");
const jwt = require("jsonwebtoken")

const jwtPassword = "secret";

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
    // Your code here
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success){
        return null ;
    }
    const signature = jwt.sign({
        username
    },jwtPassword)
    return signature
}


const ans = signJwt("snehasishmandal@gmail.com","ajkdksfhjakhdf")
console.log(ans)