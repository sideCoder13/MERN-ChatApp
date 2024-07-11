const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["Male", "Female"],
        required:true
    }
}, {timestamps: true} //=> can help in creating {member since}
)


const User = mongoose.model("User",userSchema);

module.exports = User;