import * as userController from "../controllers/userController";

import express from "express";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", authenticate, userController.getUserProfile);

export default router;
