const express = require('express')

const router = express.Router();

const {getAllUsers} = require('../Controllers/users')
const {checkAuth} = require("../Middlewares/checkAuth.js")

//get all users
router.get("/",checkAuth,getAllUsers)

module.exports = router;