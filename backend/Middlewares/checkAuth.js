const jwt = require('jsonwebtoken')
const User = require('../Modals/User')

exports.checkAuth = async(req,res,next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token could not be verified! (No token provided)"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({
                success:false,
                message:"Token could not be verified!"
            })
        }
        //                                           removes password 
        const user = await User.findById(decoded.userID).select("-password");

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not found"
            })
        }

        req.user = user; //authenticated user

        next();

    }catch(err){
        console.log("Error in checking authentication- ",err);
        res.status(500).json({
            success:false,
            message:`Error in checking authentication due to ${err}`
        })
    }
}