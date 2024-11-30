import * as userService from "../services/userService";

import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const user = await userService.createUser({ username, email, password });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        );

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};

export const getUserProfile = async (req: any, res: Response) => {
    try {
        const user = await userService.getUserById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};

export const updateUserProfile = async (req: any, res: Response) => {
    try {
        const updatedUser = await userService.updateUser(req.user.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};

export const deleteUserAccount = async (req: any, res: Response) => {
    try {
        const deletedUser = await userService.deleteUser(req.user.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};
