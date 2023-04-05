import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { connectDb } from "./config/database";
import { authenticationRouter, usersRouter , subjectRouter} from "@/routers";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/subject", subjectRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
