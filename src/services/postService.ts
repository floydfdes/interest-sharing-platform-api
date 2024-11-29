import { Post } from "../models/postModel";

const getAllPosts = async () => {
    return await Post.find({});
};

const createPost = async (data: any) => {
    const newPost = new Post(data);
    return await newPost.save();
};

export default { getAllPosts, createPost };
