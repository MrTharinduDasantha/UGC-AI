import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.config.js";

// Get user credits
const getUserCredits = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    res.status(200).json({ credits: user?.credits });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

// Get all user projects
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const projects = await prisma.project.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ projects });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

// Get project by id
const getProjectById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { projectId } = req.params as { projectId: string };
    const project = await prisma.project.findUnique({
      where: { id: projectId, userId },
    });
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ project });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

// Publish or Unpublish project
const toggleProjectPublic = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { projectId } = req.params as { projectId: string };
    const project = await prisma.project.findUnique({
      where: { id: projectId, userId },
    });

    if (!project) return res.status(404).json({ message: "Project not found" });
    if (!project?.generatedImage && !project?.generatedVideo) {
      return res.status(404).json({ message: "Image or video not generated" });
    }

    await prisma.project.update({
      where: { id: projectId },
      data: { isPublished: !project.isPublished },
    });

    res.status(200).json({ isPublished: !project.isPublished });
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.code || error.message });
  }
};

export { getUserCredits, getAllProjects, getProjectById, toggleProjectPublic };
