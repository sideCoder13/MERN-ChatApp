const Conversation = require('../Modals/Conversation')
const Message = require('../Modals/Message')
const { getReceiverSocketId, io } =  require("../Socket/socket");


exports.sendMessage = async(req,res) => {
    try{
        // console.log("Hello")
        //reciver
        const receiverId = req.params.userId;
        //sender
        const senderId = req.user._id;
        //message
        const {message} = req.body; 

        //get conversation from DB
        let conversation = await Conversation.findOne({
            participants:{ $all:[senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })     
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

        // await conversation.save();
        // await newMessage.save();

        //This will run in parallel, so saves time.
        await Promise.all([conversation.save(), newMessage.save()])
        const Messages = newMessage;


        console.log(" SOCKET IO FUNCTIONALITY");
		const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

        return res.status(201).json({
            success:true,
            message:"Message sent Successfully!",
            Messages
        })
    }catch(err){
        console.log("Error in sending message- ",err);
        res.status(500).json({
            success:false,
            message:`Error to sending message due to ${err}`
        })
    }
}


exports.getMessage = async(req,res) => {
    try{
        const receiverId = req.params.userId;
        const senderId = req.user._id;

        const allMessages = await Conversation.findOne({
            participants: {$all: [senderId,receiverId]},
        }).populate("messages")

        if(!allMessages){
            return res.status(400).json({
                success:false,
                message:"No conversations available!"
            })
        }

        res.status(200).json({
            success:true,
            message:"Fetched messages Successfully!",
            Messages: allMessages.messages
        })
    }catch(err){
        console.log("Error in getting message- ",err);
        res.status(500).json({
            success:false,
            message:`Error to getting message due to ${err}`
        })
    }
}