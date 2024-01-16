const jwt = require("jsonwebtoken")


function decodejwt(token){
    const decoded = jwt.decode(token)
    if (decoded) return true ;
    else return false;
}


console.log(decodejwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNuZWhhc2lzaG1hbmRhbEBnbWFpbC5jb20iLCJpYXQiOjE3MDQ2MTM3NTN9._FrJroFowkuc5xUSQFQ6j8MWpagaitpRReKgjyrPNjw"))