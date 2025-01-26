import { Router } from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  cancelAppointmentController,
} from "../controllers/appointmentController";

const appointmentRouter: Router = Router();

appointmentRouter.post("/schedule", createAppointment);
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.put("/cancel/:id", cancelAppointmentController);

export default appointmentRouter;
