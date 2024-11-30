import { NextFunction, Response } from "express";

import jwt from "jsonwebtoken";

interface UserPayload {
    id: string;
    username: string;
    email: string;
}

export const authenticate = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Forbidden" });
    }
};
