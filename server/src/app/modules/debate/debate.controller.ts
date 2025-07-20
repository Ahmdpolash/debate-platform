import { Request, Response } from "express";
import { DebateService } from "./debate.services.js";

const createDebate = async (req: Request, res: Response) => {
  try {
    const result = await DebateService.CreateDebate(req.body);

    return res.status(201).json({
      success: true,
      message: "Debate created successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create debate",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

const getDebate = async (req: Request, res: Response) => {
  const result = await DebateService.getDebate();

  return res.status(200).json({
    success: true,
    message: "Debate fetched successfully",
    data: result,
  });
};

const getSingleDebate = async (req: Request, res: Response) => {
  try {
    const result = await DebateService.getSingleDebate(req.params.id);

    return res.status(200).json({
      success: true,
      message: "single debate fetched successfully",
      data: result,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Debate not found",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const debateControllers = {
  createDebate,
  getDebate,
  getSingleDebate,
};
