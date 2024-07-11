const mongoose = require('mongoose')
require('dotenv').config();


const DbConnect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        .then(
            ()=>{
                console.log("Connected to the DB")
            }
        )
        .catch(
            (err)=>{
                console.log("Error in DB COnnection ",err)
            }
        )

    }catch(err){
        console.log("Error in DB ",err);
        process.exit(1)
    }
}

module.exports = DbConnect;