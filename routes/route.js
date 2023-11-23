const express = require('express');

const route = express.Router()

const {getAllProject, 
    postNewProject, 
    getAllSkill, 
    postNewSkill,
    getIdSkill } = require('../controller/controller')

// Project routes

route.get('/',getAllProject)
route.post('/new/project',postNewProject)


// Skill routes
route.get('/skill',getAllSkill)
route.post('/new/skill',postNewSkill)
route.get('/:id',getIdSkill)


module.exports = route