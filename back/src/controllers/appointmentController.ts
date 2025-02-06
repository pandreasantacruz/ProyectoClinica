import { Request, Response, NextFunction } from "express";
import AppointmentDto from "../dto/appointmentDto";
import {
  getAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../service/appointmentService";
import { Appointments } from "../entities/appointments";
import { promises } from "dns";

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, medicalHistory, reasonConsultation } = req.body;
    const { userId } = req.params;
    const dataAppointment: AppointmentDto = {
      date,
      time,
      medicalHistory,
      reasonConsultation,
      userid: parseInt(userId),
    };
    const newAppointment = await createAppointmentService(dataAppointment);
    res
      .status(200)
      .json({ message: "Appointment created successfully", newAppointment });
  } catch (error) {
    console.log("Error Controller Create Appointment", error);
    res.status(400).json({ message: "Error creating appointment.", error });
  }
};
export const getAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userIdParam = req.params.userId; // el userId desde los parámetros de la ruta
    const userId = Number(userIdParam);
    const appointments: Appointments[] = await getAppointmentsService(userId);

    if (appointments.length === 0) {
      res.status(200).json({
        message: "No appointments found for this user",
        appointments: [],
      });
      return;
    }
    res
      .status(200)
      .json({ message: "Appointments retrieved successfully", appointments });
  } catch (error) {
    console.log("Error Controller get Appointments", error);
    res.status(500).json({ message: "Error retrieving appointments", error });
  }
};
export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointmentIdParam = req.params.Id; //Obtener el userId desde los parámetros de la ruta
    const appointmentId = Number(appointmentIdParam); //convertirlo en un número
    const appointment = await getAppointmentByIdService(appointmentId); // Llamar a la función con el id
    res
      .status(200)
      .json({ message: "Appointment retrieved successfully", appointment });
  } catch (error) {
    res.status(404).json({ message: "Appointment not found", error });
  }
};
export const cancelAppointmentController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params; // Obtén el ID de los parámetros de la URL
    if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid appointment ID" });
      return;
    }
    const cancelAppointment = await cancelAppointmentService(Number(id));

    if (cancelAppointment) {
      res.status(200).json({
        message: "Appointment cancelled",
        appointment: cancelAppointment,
      });
      return;
    }
    res.status(404).json({ message: "Appointment not found" });
  } catch (error) {
    console.log("Error Cancelling Appointment ", error);
    res.status(400).json({
      message: "An error occurred while cancelling the appointment",
      error,
    });
    next(error);
  }
};
