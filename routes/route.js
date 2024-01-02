const express = require('express');

const route = express.Router()

const {getAllProject, 
    postNewProject, 
    getAllSkill, 
    postNewSkill,
    getIdSkill } = require('../controller/controller')

// Project routes

route.get('/',getAllProject) //Give better route name
route.post('/new/project',postNewProject)


// Skill routes
route.get('/skill',getAllSkill)
route.post('/new/skill',postNewSkill)
route.get('/:id',getIdSkill)

// contact routes

module.exports = route