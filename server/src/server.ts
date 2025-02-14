import express, { Request, Response } from "express";
import { connectMongoDb } from "./config/database";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import {
  userRouter,
  authRouter,
  productRouter,
  discountCodeRouter,
  categoryRouter,
  parentCategoryRouter,
  sizeRouter,
} from "./router";

const app = express();
dotenv.config();
connectMongoDb();

const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/${process.env.API_VERSION}/users`, userRouter);
app.use(`/${process.env.API_VERSION}/auth`, authRouter);
app.use(`/${process.env.API_VERSION}/products`, productRouter);
app.use(`/${process.env.API_VERSION}/discountCode`, discountCodeRouter);
app.use(`/${process.env.API_VERSION}/parentCategories`, parentCategoryRouter);
app.use(`/${process.env.API_VERSION}/categories`, categoryRouter);
app.use(`/${process.env.API_VERSION}/sizes`, sizeRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.sendStatus(200); // Preflight Request successful, stop processing
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

export default app;
