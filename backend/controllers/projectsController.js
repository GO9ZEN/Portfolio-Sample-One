import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'

// @desc Fetch all projects
// @route GET /api/projects
// @acess Public      
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({})

    res.json(projects)
})

export { getProjects }