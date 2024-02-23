import asyncHandler from 'express-async-handler'
import Profile from '../models/profileModel.js'

// @desc Fetch all profileInformations
// @route GET /api/profile
// @acess Public    
const getProfiles = asyncHandler(async (req, res) => {
    const profileInformations = await Profile.find({})

    res.json(profileInformations)
})

export { getProfiles }