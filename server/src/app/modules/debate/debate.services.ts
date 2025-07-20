import { Debate } from "./debate.model.js";

const CreateDebate = async (payload: any) => {
  const result = await Debate.create(payload);
  return result;
};

const getDebate = async () => {
  const result = await Debate.find({});
  return result;
};

const getSingleDebate = async (id: string) => {
  const result = await Debate.findById(id);
  if (!result) {
    throw new Error("Debate not found");
  }
  return result;
};

export const DebateService = {
  CreateDebate,
  getDebate,
  getSingleDebate,
};
