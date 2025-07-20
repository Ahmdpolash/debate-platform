import { Request, Response } from "express";
import { ArgumentService } from "./argument.services.js";

const postArgument = async (req: Request, res: Response) => {
  try {
    const result = await ArgumentService.createArgument(req.body);

    return res.status(201).json({
      success: true,
      message: "Argument posted successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || " argument post failed",
    });
  }
};

const getArgumentsBySide = async (req: Request, res: Response) => {
  try {
    const { debateId, side } = req.params;

    const result = await ArgumentService.getArgumentsBySide(debateId, side);

    return res.status(200).json({
      success: true,
      message: `Arguments for ${side} fetched successfully`,
      data: result,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "failed to fetch arguments",
    });
  }
};

export const ArgumentControllers = {
  postArgument,
  getArgumentsBySide,
};
