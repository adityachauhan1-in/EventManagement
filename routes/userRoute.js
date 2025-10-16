
import express from "express";
import { createUser, listUsers } from "../controllers/userController.js";
// NOTE: These user routes are only for local testing, not part of the assignment requirements.

const router = express.Router();

router.post("/", createUser);
router.get("/", listUsers);

export default router;
