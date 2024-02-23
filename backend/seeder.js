import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import profileInformations from './data/profile.js'
import projects from './data/projects.js'
import services from './data/services.js'
import skillsData from './data/skillsData.js'

import User from './models/userModel.js'
import Profile from './models/profileModel.js'
import Project from './models/projectModel.js'
import Service from './models/servicesModel.js'
import Skill from './models/skillDataModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Profile.deleteMany()
        await Project.deleteMany()
        await Service.deleteMany()
        await Skill.deleteMany()

        // await User.insertMany(users)
        // await Profile.insertMany(profileInformations)
        // await Project.insertMany(projects)
        // await Service.insertMany(services)
        // await Skill.insertMany(skillsData)

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProfile = profileInformations.map(profileInformation => {
            return {...profileInformation, user: adminUser}
        })

        await Profile.insertMany(sampleProfile)

        const sampleProject = projects.map(project => {
            return {...project, user: adminUser}
        })

        await Project.insertMany(sampleProject)

        const sampleService = services.map(service => {
            return {...service, user: adminUser}
        })

        await Service.insertMany(sampleService)

        const sampleSkills = skillsData.map(skillData => {
            return {...skillData, user: adminUser}
        })

        await Skill.insertMany(sampleSkills)

        console.log('Data imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Profile.deleteMany()
        await Project.deleteMany()
        await Service.deleteMany()
        await Skill.deleteMany()

        console.log('Data destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}