import { Request, Response, NextFunction } from "express";

export const createUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, nDniType, nDni, birthday, username, newPassword } =
    req.body;

  if (
    !name ||
    !email ||
    !nDniType ||
    !nDni ||
    !birthday ||
    !username ||
    !newPassword
  ) {
    res.status(400).json({ message: "All fields are required." });
  }

  next();
};

export const validateLoginData = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
  }

  next();
};
