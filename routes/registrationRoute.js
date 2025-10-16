import express from 'express'
import { registerUser,cancelRegistration } from '../controllers/registrationController.js'

const router = express.Router()

router.post("/events/:id/register/:userId" , registerUser)
router.delete("/events/:id/cancel/:userId" , cancelRegistration)

export default router;