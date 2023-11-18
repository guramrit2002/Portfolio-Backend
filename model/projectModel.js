const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true]
    },
    contribute:{
        type:String,
        required:[true]
    },
    skills:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Skill' 
    },
    about:{
        type:String,
        required:[true]
    },
    github:{
        type:String,
        required:[true]
    },
    demo:{
        type:String,
        required:[true]
    }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
