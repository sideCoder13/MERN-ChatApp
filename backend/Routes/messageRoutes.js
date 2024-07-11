const express = require('express')
const router = express.Router();

const {sendMessage,getMessage} = require('../Controllers/messages.js')
const {checkAuth} = require("../Middlewares/checkAuth.js")

//message routes
router.post("/send/:userId",checkAuth,sendMessage)
router.get("/:userId",checkAuth,getMessage)

module.exports = router;