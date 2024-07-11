const express = require('express');
const router = express.Router();

const auth = require('./authRoutes')
const message = require('./messageRoutes')
const user = require('./userRoutes')

//auth routes
router.use("/auth",auth)

//message routes
router.use("/messages",message)

//user routes
router.use("/users",user);


module.exports = router;
