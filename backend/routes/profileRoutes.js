import express from 'express'
import { getProfiles } from "../controllers/profileController.js"

const router = express.Router()

router.route('/').get(getProfiles)

export default router