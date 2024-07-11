const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateJWT = (userID, res) => {
    try{
        // const payload = 

        const token = jwt.sign({userID},process.env.JWT_SECRET, {
            expiresIn:"15d"
        })

        res.cookie("jwt",token,{
            maxAge: 15*24*60*60*1000, //millisecods
            httpOnly: true, //to prevent XSS attacks
            sameSite:true,//CSRF attacks cross-site request forgery attacks
            secure:process.env.NODE_ENV !== "Development" 
        })
    }catch(err){
        console.log("Error in generating a JWT token", err);
    }
}

module.exports = generateJWT;