import { getEventStats } from "../controllers/statsController.js";
import express from 'express'
const router  =  express.Router();

router.get("/events/:id/stats",getEventStats);

export default router;