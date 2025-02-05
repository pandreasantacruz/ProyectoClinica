import { Request, Response, NextFunction } from "express";

export const createAppointmentMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id, date, time, medicalHistory, reasonConsultation, userId } =
    req.body;
  if (!date || !time || !medicalHistory || !reasonConsultation) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }
  next();
};
