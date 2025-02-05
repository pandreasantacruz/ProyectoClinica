import { Router } from "express";
import { createUserValidator } from "../middlewares/createUser";
import { validateLoginData } from "../middlewares/loggingMiddleware";
import {
  createUser,
  getUser,
  getUserById,
  loginController,
} from "../controllers/userController";

export const userRouter: Router = Router();

userRouter.post("/register", createUserValidator, createUser);
userRouter.get("/", getUser);
userRouter.get("/:id", getUserById);
userRouter.post("/login", loginController);
