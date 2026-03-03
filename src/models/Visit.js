import mongoose from "mongoose";

const visitSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    visitDate: {
      type: Date,
      default: Date.now,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "checked_in", "in_progress", "completed", "cancelled"],
      default: "checked_in",
    },
    vitals: {
      temperatureC: Number,
      pulse: Number,
      respRate: Number,
      bpSystolic: Number,
      bpDiastolic: Number,
      spo2: Number,
      weightKg: Number,
    },
    notes: String,
  },
  { timestamps: true }
);

visitSchema.index({ patient: 1, visitDate: -1 });

export default mongoose.model("Visit", visitSchema);