import Patient from "../models/Patient.js";

export const getPatients = async (req, res) => {
  const patients = await Patient.find().sort({ lastName: 1, firstName: 1 });
  res.json(patients);
};

export const getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.status(404).json({ message: "Patient not found" });
  res.json(patient);
};

export const createPatient = async (req, res) => {
  const created = await Patient.create(req.body);
  res.status(201).json(created);
};

export const updatePatient = async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updated) return res.status(404).json({ message: "Patient not found" });
  res.json(updated);
};

export const deletePatient = async (req, res) => {
  const deleted = await Patient.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Patient not found" });
  res.json({ message: "Patient deleted" });
};