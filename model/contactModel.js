const mongoose = require('mongoose')

const contactScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model('Contact',contactScheme)
module.exports = Contact