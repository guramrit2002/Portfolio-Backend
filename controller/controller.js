const asyncHandeler = require('express-async-handler')
const Project = require('../model/projectModel')
const Skill = require('../model/skillModel')

// Project controllers

const getAllProject = asyncHandeler(async (req,res)=>{
    const project = await Project.find()
    res.status(200).json(project)
})

const postNewProject = asyncHandeler(async (req, res) => {
    const { name, contribute, skills, about, github, demo } = req.body;

    if (!name || !contribute || !skills || !about || !github || !demo) {
        res.status(400).json({ error: 'All fields are required!' });
        return;
    }

    try {
        const newProject = await Project.create({
            name,
            contribute,
            skills,
            about,
            github,
            demo,
        });

        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Skill Controllers

const getAllSkill = asyncHandeler(async (req,res)=>{
    const skills = await Skill.find()
    res.status(200).json(skills)
})

const postNewSkill = asyncHandeler(async (req,res)=>{

    const {name} = req.body
    console.log(name)
    if(!name){
        res.status(400)
        throw new Error('Name is required !!')
    }
    const newSkill = await Skill.create({
        name
    })
    res.status(201).json({
        newSkill
    })
})


module.exports = {getAllProject, postNewProject,getAllSkill, postNewSkill}