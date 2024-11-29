import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    tags: [String],
});

export const Post = mongoose.model("Post", PostSchema);
