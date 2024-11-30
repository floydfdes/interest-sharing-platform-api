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

export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await postService.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error fetching post", error: errorMessage });
    }
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        const updatedPost = await postService.updatePost(req.params.id, req.body);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error updating post", error: errorMessage });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const deletedPost = await postService.deletePost(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(204).send(); // No content
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error deleting post", error: errorMessage });
    }
};

export const likePost = async (req: Request, res: Response) => {
    try {
        const likedPost = await postService.likePost(req.params.id);
        if (!likedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(likedPost);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        res.status(500).json({ message: "Error liking post", error: errorMessage });
    }
};
