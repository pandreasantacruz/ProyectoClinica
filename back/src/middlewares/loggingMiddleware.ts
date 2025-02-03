import { Request, Response, NextFunction } from "express";

export const validateLoginData = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  next();
};
