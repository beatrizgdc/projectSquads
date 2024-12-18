import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import userRoutes from "./routes/userRoutes";
import squadRoutes from "./routes/squadRoutes";
import membroRoutes from "./routes/membroRoutes";
import projetoRoutes from "./routes/projetoRoutes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/squads", squadRoutes);
app.use("/api/membros", membroRoutes);
app.use("/api/projetos", projetoRoutes);

app.use(errorMiddleware);

export default app;
