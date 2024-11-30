import { Post } from "../models/postModel";

const getAllPosts = async () => {
    return await Post.find({});
};

const createPost = async (data: any) => {
    const newPost = new Post(data);
    return await newPost.save();
};

const getPostById = async (id: string) => {
    return await Post.findById(id);
};

const updatePost = async (id: string, data: any) => {
    return await Post.findByIdAndUpdate(id, data, { new: true });
};

const deletePost = async (id: string) => {
    return await Post.findByIdAndDelete(id);
};

const likePost = async (id: string) => {
    return await Post.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
};

export default { getAllPosts, createPost, getPostById, updatePost, deletePost, likePost };
