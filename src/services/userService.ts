import { IUser, User } from "../models/userModel";

import bcrypt from "bcrypt";

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    const hashedPassword = await bcrypt.hash(userData.password!, 10);
    const newUser = new User({ ...userData, password: hashedPassword });
    return newUser.save();
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return User.findOne({ email });
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return User.findById(id);
};

export const updateUser = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
    if (userData.password) {
        userData.password = await bcrypt.hash(userData.password, 10);
    }
    return User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
    return User.findByIdAndDelete(id);
};

export const getAllUsers = async (): Promise<IUser[]> => {
    return User.find({});
};
