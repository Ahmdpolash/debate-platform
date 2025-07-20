import { model, Schema } from "mongoose";

const debateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
      index: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "completed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export const Debate = model("debates", debateSchema);
