import { Router } from "express";
import {
  createUser,
  getUser,
  getUserById,
} from "../controllers/userController";

const router: Router = Router();

router.post("/users/register", createUser);
router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("users/login");
// appointments
router.post("/appointments/schedule");
router.get("/appointments");
router.get("/appointments/:id");
router.put("/appointments/cancel");

export default router;
