const asyncHandeler = require('express-async-handler')
const Project = require('../model/projectModel')
const Skill = require('../model/skillModel')

// Project controllers

const getAllProject = asyncHandeler(async (req, res) => {
    try {
      const projects = await Project.find();
  
      for (const project of projects) {
        console.log(project.skills);
  
        const skills = project.skills;
  
        for (const skillId of skills) {
          const skillObj = await Skill.findById(skillId);
          console.log(skillObj);
        }
      }
      const projectsWithSkills = await Promise.all(
        projects.map(async (project) => {
          const skills = await Skill.find({ _id: { $in: project.skills } });
          return {
            project: project,
            skills: skills,
          };
        })
      );
      res.status(200).json(projectsWithSkills);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

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


const getIdSkill = asyncHandeler(async (req, res) => {
    const skill =await Skill.findById(req.params.id)
    if (!skill){
        res.status(404)
        throw new Error("Skill Not Found")
    }
    res.status(200).json({
        skill
    });
});

module.exports = {getAllProject, postNewProject,getAllSkill, postNewSkill,getIdSkill}