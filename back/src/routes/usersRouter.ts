import { Router } from "express";
import {
  createUser,
  getUser,
  getUserById,
} from "../controllers/userController";

export const userRouter: Router = Router();

userRouter.post("/register", createUser);
userRouter.get("/", getUser);
userRouter.get("/:id", getUserById);
userRouter.post("login");
