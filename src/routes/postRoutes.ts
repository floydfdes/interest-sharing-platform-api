import { createPost, deletePost, getPostById, getPosts, likePost, updatePost } from "../controllers/postController";

import { Router } from "express";

const router = Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/like", likePost);

export default router;
