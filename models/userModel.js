const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is require'],
        trim:true,
        maxLength:[20,'Name must be less than 20 char']
    },
    email:{
        type:String,
        requires:[true,'Email is required'],
        unique:true
    }
})


module.exports = mongoose.model('user',userSchema);