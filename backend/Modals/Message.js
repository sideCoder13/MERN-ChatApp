const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message:[{
        type:String,
        required:true
    }],
    senderId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }],
    receiverId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }]
}, {timestamps: true} //  created at and updated at
)


const message = mongoose.model("Message",messageSchema);

module.exports = message;