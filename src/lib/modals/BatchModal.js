import mongoose from "mongoose";

const { Schema } = mongoose;

const batchSchema = new Schema(
  {
    title: { type: String },
    description: String,
    course: { type: mongoose.Types.ObjectId, ref: "Course" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export const BatchModal =
  mongoose.models.Batch || mongoose.model("Batch", batchSchema);
