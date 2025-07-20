import { Request, Response } from "express";
import { participantService } from "./participant.services.js";

const joinDebate = async (req: Request, res: Response) => {
  try {
    const result = await participantService.joinDebate(req.body, res);

    res.status(201).json({
      message: "Successfully joined the debate",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to join the debate" });
  }
};

export const participantController = {
  joinDebate,
};
