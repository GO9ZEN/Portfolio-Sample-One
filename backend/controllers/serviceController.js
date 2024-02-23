import asyncHandler from 'express-async-handler'
import Service from '../models/servicesModel.js'

// @desc Fetch all services
// @route GET /api/services
// @acess Public    
const getServices = asyncHandler(async (req, res) => {
    const services = await Service.find({})

    res.json(services)
})

export { getServices }