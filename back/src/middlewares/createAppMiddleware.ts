import { Request, Response, NextFunction } from "express";

export const createAppointmentMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, date, time, status, medicalHistory, reasonConsultation, userId } =
    req.body;
  if (!date || !time || !medicalHistory || !reasonConsultation || !userId) {
    res.status(400).json({ message: "All fields are required." });
  }
  next();
};
