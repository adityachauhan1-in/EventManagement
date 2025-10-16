import express from 'express'
import { createEvent,getEventDetails,upcomingEvents } from '../controllers/eventController.js'

const router = express.Router();

router.post("/",createEvent)
router.get("/:id",getEventDetails)
router.get("/upcoming/list",upcomingEvents)

export default router;