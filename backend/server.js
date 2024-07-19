//package imports
const express = require('express');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

//file imports
const routes = require('./Routes/Routes.js')
const DbConnect = require('./Db/db.js');
const {server, app} = require('./Socket/socket.js')

//variables
// const app = express();
const PORT = process.env.PORT;


//Middlewares
require('dotenv').config();
app.use(express.json()); // to parse incoming request in JSON payloads
//extract/ destructures from req.body
app.use(morgan('dev'))
app.use(cookieParser()) //to parse incoming cookies from  req.cookie

// //test route
// app.get("/",(req, res)=>{
//     res.send(`Test Route`)
// })

app.use("/api/v1", routes);

server.listen(PORT,()=>{
    DbConnect();
    console.log(`Server started at ${PORT}`)
})
