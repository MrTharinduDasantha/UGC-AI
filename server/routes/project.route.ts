import express from "express";
import protect from "../middlewares/auth.middleware.js";
import {
  createProject,
  createVideo,
  getAllPublishedProjects,
  deletedProject,
} from "../controllers/project.controller.js";
import upload from "../configs/multer.config.js";

const projectRouter = express.Router();

projectRouter.post(
  "/create",
  upload.array("images", 2),
  protect,
  createProject,
);
projectRouter.post("/video", protect, createVideo);
projectRouter.get("/published", getAllPublishedProjects);
projectRouter.delete("/:projectId", protect, deletedProject);

export default projectRouter;
