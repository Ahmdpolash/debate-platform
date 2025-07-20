import { DebateParticipant } from "../debate_participant/participant.model.js";
import { Argument } from "./arguments.model.js";

// Banned word list
const bannedWords = ["stupid", "idiot", "dumb"];

const createArgument = async ({ debateId, userId, side, content }: any) => {
  if (!["support", "oppose"].includes(side)) {
    const err = new Error("Invalid side selected");
    // @ts-ignore
    err.statusCode = 400;
    throw err;
  }

  // Check if user has joined the debate on that side
  const joined = await DebateParticipant.findOne({ debateId, userId, side });
  if (!joined) {
    const err = new Error("You must join this side before posting.");
    // @ts-ignore
    err.statusCode = 403;
    throw err;
  }

  // Check for toxic words
  const lower = content.toLowerCase();
  const hasToxic = bannedWords.some((word) => lower.includes(word));
  if (hasToxic) {
    const err = new Error("Your content contains inappropriate words.");
    // @ts-ignore
    err.statusCode = 400;
    throw err;
  }

  const newArgument = await Argument.create({
    debateId,
    userId,
    side,
    content,
  });
  return newArgument;
};

const getArgumentsBySide = async (debateId: string, side: string) => {
  if (!["support", "oppose"].includes(side)) {
    const err = new Error("Invalid side.");
    // @ts-ignore
    err.statusCode = 400;
    throw err;
  }

  const args = await Argument.find({ debateId, side })
    .populate("userId", "name image")
    .sort({ createdAt: -1 });

  return args;
};

export const ArgumentService = {
  createArgument,
  getArgumentsBySide,
};
