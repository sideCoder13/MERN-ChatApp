const express = require('express');
const router = express.Router();
const {loginUser, logoutUser, singupUser} = require("../Controllers/auth")

//auth routes
router.post("/login",loginUser)
router.post("/signup",singupUser)
router.post("/logout",logoutUser)


module.exports = router;