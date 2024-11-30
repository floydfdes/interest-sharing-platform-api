import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/database";
import { swaggerDocs, swaggerUi } from './config/swagger';
import { errorHandler } from "./middlewares/errorHandler";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Error handling
app.use(errorHandler);

export default app;
