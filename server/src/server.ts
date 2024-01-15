import express, { Request, Response } from "express";
import { connectMongoDb } from "./config/database";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { userRouter, authRouter } from "./router";

const app = express();
dotenv.config();
connectMongoDb();

const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/${process.env.API_VERSION}/user`, userRouter);
app.use(`/${process.env.API_VERSION}/auth`, authRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

export default app;
