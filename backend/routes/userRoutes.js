const express= require('express');
const {registerUser,loginUser} = require('../controllers/userControllers');

const router=express.Router();
router.route("/").post(registerUser);
router.route("/SignIn").post(loginUser);
module.exports= router;