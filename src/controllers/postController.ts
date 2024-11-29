import { Request, Response } from "express";

import postService from "../services/postService";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error fetching posts", error: errorMessage });

    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        const newPost = await postService.createPost(req.body);
        res.status(201).json(newPost);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error creating post", error: errorMessage });

    }
};
