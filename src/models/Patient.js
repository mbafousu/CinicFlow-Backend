import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    dob: Date,
    phone: String,
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

patientSchema.index({ lastName: 1, firstName: 1 });

export default mongoose.model("Patient", patientSchema);