import { Router } from "express";
import { createAppointmentMiddleware } from "../middlewares/createAppMiddleware";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  cancelAppointmentController,
} from "../controllers/appointmentController";

const appointmentRouter: Router = Router();

appointmentRouter.post(
  "/schedule",
  createAppointmentMiddleware,
  createAppointment
);
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.put("/cancel/:id", cancelAppointmentController);

export default appointmentRouter;
