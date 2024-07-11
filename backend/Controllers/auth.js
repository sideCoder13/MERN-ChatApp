const { ImGift } = require('react-icons/im');
const User = require('../Modals/User')
const bcrypt = require('bcrypt')
const generateJWT = require('../utils/generateJWT')


exports.singupUser = async(req, res)=>{
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        //validation
        //Should not hv empty fields
        if(!fullName || !userName || !password || !confirmPassword || !gender){
            return res.status(400).json({
                success:false,
                message:"All fields must be filled !"
            })
        }

        //same pass
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Both password shpuld be same !"
            })
        }

        //check DB for not same user
        const existingUser = await User.findOne({userName});
        if(existingUser){
            res.status(400).json({
                success:false,
                message:"The user already exists!"
            })
        }

        //create avatar
        const boyProfile = "https://avatar.iran.liara.run/public/boy"
        const girlProfile = "https://avatar.iran.liara.run/public/girl"

        //hash pass
        const hashPass = await bcrypt.hash(password,10);
        


        //create entry in DB
        const user = new User({
            fullName,
            userName,
            gender,
            password:hashPass,
            profile: gender === "Male" ? boyProfile : girlProfile
        })

        generateJWT(user._id, res);
        
        await user.save();

        res.status(201).json({
            success:true,
            message:"Successfully created User!",
            fullName:user.fullName,
            userName:user.userName,
            profile: user.profile
        })

    }catch(err){
        console.log("Error in siginig up- ",err);
        res.status(500).json({
            success:false,
            message:`Error to signup due to ${err}`
        })
    }
}

exports.loginUser = async(req, res)=>{
    try{
       
        const {userName, password} = req.body;

        if(!userName || !password ){
            return res.status(400).json({
                success:false,
                message:"All fields must be filled !"
            })
        }
        
        const user = await User.findOne({userName})
        
        const dbPass = user.password;
        const checkPass = await bcrypt.compare(password,dbPass);
        if(!checkPass){
            res.status(400).json({
                success:false,
                message:"Password is incorrect!"
            })
        }

        generateJWT(user._id, res);

        res.status(201).json({
            success:true,
            message:"Successfully logged in User!",
            _id: user._id,
            fullName:user.fullName,
            userName:user.userName,
            profile: user.profile
        })
        

    }catch(err){
        console.log("Error in logging up- ",err);
        res.status(500).json({
            success:false,
            message:`Error to logging due to ${err}`
        })
    }
}

exports.logoutUser = (req, res)=>{
    try{
        // console.log(req.cookies.jwt);
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({
            success:true,
            message: "Logged out successfully!"
        })

    }catch(err){
        console.log("Error in logging out- ",err);
        res.status(500).json({
            success:false,
            message:`Error to logging out due to ${err}`
        })
    }
}


