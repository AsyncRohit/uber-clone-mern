const { validationResult } = require('express-validator');
const userModel=require('../models/user_model');
const userService= require('../services/user_service')




module.exports.registerUser= async function(req,res,next){
    const errors =validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
console.log(req.body);

    const {fullname, email , password} = req.body;
    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashedPassword
    });
const token =user.generateAuthToken();
res.status(201).json({token,user});


}