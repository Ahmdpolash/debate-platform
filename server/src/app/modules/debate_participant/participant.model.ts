import { Schema, model } from "mongoose";

const debateParticipantSchema = new Schema(
  {
    debateId: {
      type: Schema.Types.ObjectId,
      ref: "debates",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    side: {
      type: String,
      enum: ["support", "oppose"],
      required: true,
    },
  },
  { timestamps: true }
);

// unique index
debateParticipantSchema.index({ debateId: 1, userId: 1 }, { unique: true });

export const DebateParticipant = model(
  "debate_participants",
  debateParticipantSchema
);
