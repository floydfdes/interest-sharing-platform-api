import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String, required: true },
});

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    tags: [String],
    featured: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    comments: [CommentSchema],
});

export const Post = mongoose.model("Post", PostSchema);
