import { Request, Response } from "express";
import Project from "../models/project";
import { ErrorHandler } from "../utils/errorHandler";

export const getProject = async (req: Request, res: Response, next: any) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project not found", 404));
  }

  res.status(200).json({
    success: true,
    data: project,
  });
};

export const createProject = async (req: Request, res: Response, next: any) => {
  const project = await Project.create(req.body);

  res.status(200).json({
    success: true,
    message: "Project created",
    data: project,
  });
};
