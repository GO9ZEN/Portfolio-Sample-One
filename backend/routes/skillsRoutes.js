import express from 'express'
import { getSkills } from '../controllers/skillsController.js'

const router = express.Router()

router.route('/').get(getSkills)

export default router