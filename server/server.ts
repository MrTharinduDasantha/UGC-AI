import "./configs/instrument.config.mjs";
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerk.controller.js";
import * as Sentry from "@sentry/node";
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());

app.post(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks,
);

app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
