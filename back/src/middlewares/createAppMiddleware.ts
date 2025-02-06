import { Console } from "console";
import { Request, Response, NextFunction } from "express";

export const createAppointmentMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { date, time, medicalHistory, reasonConsultation } = req.body;
  const { userId } = req.params;
  console.log(userId, "mirameeeee");
  if (!date || !time || !medicalHistory || !reasonConsultation) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }
  next();
};
