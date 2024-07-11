
const User = require('../Modals/User')

exports.getAllUsers = async(req, res) => {
    try{
        const currentUserId = req.user._id;
        
        const getAllUsers = await User.find({_id: {$ne:currentUserId}}).select("-password");

        res.status(200).json({All_users: getAllUsers})

    }catch(err){
        console.log("Error in getting all user message- ",err);
        res.status(500).json({
            success:false,
            message:`Error to getting all user due to ${err}`
        })
    }
}