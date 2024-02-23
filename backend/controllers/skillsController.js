import asyncHandler from 'express-async-handler'
import Skill from '../models/skillDataModel.js'

// @desc Fetch all skillsData
// @route GET /api/skills
// @acess Public
const getSkills = asyncHandler(async (req, res) => {
    const skillsData = await Skill.find({})

    res.json(skillsData)
})

export { getSkills }