import { Schema, model } from "mongoose";

const argumentSchema = new Schema(
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
    comment: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Argument = model("arguments", argumentSchema);
