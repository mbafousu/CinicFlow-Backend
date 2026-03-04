import Visit from "../models/Visit.js";

export const getVisits = async (req, res) => {
  const filter = {};
  if (req.query.patientId) filter.patient = req.query.patientId;

  const visits = await Visit.find(filter)
    .populate("patient", "firstName lastName email")
    .sort({ visitDate: -1 });

  res.json(visits);
};

export const getVisitById = async (req, res) => {
  const visit = await Visit.findById(req.params.id).populate(
    "patient",
    "firstName lastName email"
  );
  if (!visit) return res.status(404).json({ message: "Visit not found" });
  res.json(visit);
};

export const createVisit = async (req, res) => {
  const created = await Visit.create(req.body);
  res.status(201).json(created);
};

export const updateVisit = async (req, res) => {
  const updated = await Visit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updated) return res.status(404).json({ message: "Visit not found" });
  res.json(updated);
};

export const deleteVisit = async (req, res) => {
  const deleted = await Visit.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Visit not found" });
  res.json({ message: "Visit deleted" });
};