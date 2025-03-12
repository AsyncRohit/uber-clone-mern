const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be ar least 3 characters long']
        },
        lastname:{
            type:String,
            required:true,
            minlength:[3,'Last name must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    sockerId:{
        type:String,
    },
})

userSchema.methods.generateAuthToken=function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token
}

userSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(this.password, password);
}

userSchema.methods.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}


const userModel = mongoose.model('user',userSchema);

module.exports = userModel;