import { Types } from "mongoose";
import { DebateParticipant } from "./participant.model.js";
import { Response } from "express";

type JoinDebatePayload = {
  debateId: Types.ObjectId;
  userId: Types.ObjectId;
  side: "support" | "oppose";
};

const joinDebate = async (payload: JoinDebatePayload, res: Response) => {
  const alreadyJoined = await DebateParticipant.findOne({
    debateId: payload.debateId,
    userId: payload.userId,
  });

  if (alreadyJoined) {
    return res
      .status(400)
      .json({ message: "You have already joined this debate." });
  }

  const newJoin = await DebateParticipant.create(payload);

  return newJoin;
};

const getParticipants = async (debateId: string) => {
  const participants = await DebateParticipant.find({ debateId })
    .populate("userId", "name email image")
    .sort({ createdAt: 1 });

  return participants;
};

export const participantService = {
  joinDebate,
  getParticipants,
};
