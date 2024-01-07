const jwt = require("jsonwebtoken");
const jwtPassword = "secret";


function verifyJwt(token) {
    let ans = "verified" ;
    try {
        jwt.verify(token, jwtPassword);
    }catch(e) {
        ans = "Not verified";
    }
    return ans 
}

const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNuZWhhc2lzaG1hbmRhbEBnbWFpbC5jb20iLCJpYXQiOjE3MDQ2MTM3NTN9._FrJroFowkuc5xUSQFQ6j8MWpagaitpRReKgjyrPNjw");
console.log(ans)