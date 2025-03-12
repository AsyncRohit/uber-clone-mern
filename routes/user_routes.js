const express =require('express');
const { ExpressValidator } = require('express-validator');
const router = express.Router();
const {body}= require('express-validator')
const userController=require('../controllers/user_controller');
 
router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must at least 3 character long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must at least 3 character long '),
    body('password').isLength({min:8}).withMessage("password must be 8 digit long"),
],userController.registerUser)





module.exports =router;