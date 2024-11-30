import * as userController from "../controllers/userController";

import express from "express";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", authenticate, userController.getUserProfile);
router.put("/profile", authenticate, userController.updateUserProfile);
router.delete("/profile", authenticate, userController.deleteUserAccount);
router.get("/", authenticate, userController.getAllUsers);

export default router;
