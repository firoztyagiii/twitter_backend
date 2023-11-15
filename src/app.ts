import express from "express";
import userRouter from "./routes/userRoutes";
import globalError from "./controller/errorController";

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.use(globalError);

export default app;
