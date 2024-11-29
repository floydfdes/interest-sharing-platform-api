import { createPost, getPosts } from "../controllers/postController";

import { Router } from "express";

const router = Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
