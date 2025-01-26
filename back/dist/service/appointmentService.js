"use strict";
//import IUser from "../interface/IUser";
//import { createUserService } from "./user";
//import IAppointment from "../interface/IAppointment";
//import AppointmentDto from "../dto/appointmentDto";
//import { userInfo } from "os";
//const appointments: IAppointment[] = [
// {
//   id: 1,
//   userid: 101,
//   date: new Date("2025-02-10T10:30:00"),
//   time: 60,
//   status: "active",
//   medicalHistory: "Diabetes tipo 2, hipertensión controlada.",
//   reasonConsultation: "Chequeo general y ajuste de medicamentos.",
// },
// {
//   id: 2,
//   userid: 102,
//   date: new Date("2025-02-11T14:00:00"),
//   time: 30,
//   status: "cancelled",
//   medicalHistory: "Sin antecedentes médicos relevantes.",
//   reasonConsultation: "Consulta por dolor de cabeza recurrente.",
// },
// {
//   id: 3,
//   userid: 103,
//   date: new Date("2025-02-12T09:00:00"),
//   time: 45,
//   status: "active",
//   medicalHistory: "Asma controlada, alergia al polen.",
//   reasonConsultation: "Revisión de tratamiento para alergias.",
// },
// {
//   id: 4,
//   userid: 104,
//   date: new Date("2025-02-13T11:15:00"),
//   time: 90,
//   status: "active",
//   medicalHistory: "Hipotiroidismo, colesterol elevado.",
//   reasonConsultation: "Evaluación de síntomas de fatiga persistente.",
// },
// {
//   id: 5,
//   userid: 105,
//   date: new Date("2025-02-14T16:00:00"),
//   time: 120,
//   status: "cancelled",
//   medicalHistory: "Antecedentes de cirugía de rodilla.",
//   reasonConsultation: "Seguimiento postoperatorio y fisioterapia.",
// },
//];
// const getAppointmentsService = async (): Promise<IAppointment[]> => {
//   return appointments;
// };
// console.log(getAppointmentsService(), "Holi");
// const getAppointmentByIdService = async (
//   appointmentId: number
// ): Promise<IAppointment | null> => {
//   const appointment = appointments.find(
//     (appointment) => appointment.id === appointmentId
//   );
//   return appointment || null;
// };
// console.log(getAppointmentByIdService(5), "denuevoyo");
// let id: number = 3;
// let credentialsId: number = 555;
// export const createAppointmentService = async (
//   appointmentData: AppointmentDto
// ): Promise<IAppointment> => {
//   try {
//     const newAppointmentr: IAppointment = {
//       id,
//       userid: 10,
//       date: appointmentData.date,
//       time: appointmentData.time,
//       status: appointmentData.status,
//       medicalHistory: appointmentData.medicalHistory,
//       reasonConsultation: appointmentData.reasonConsultation,
//     };
//     appointments.push(newAppointmentr);
//     id++;
//     return newAppointmentr;
//   } catch (error) {
//     console.log("Error CreateUserService", error);
//   }
//   throw Error;
// };
// export const cancelAppointment = async (
//   appointmentId: number
// ): Promise<IAppointment | null> => {
//   try {
//     const appointmentIndex = appointments.findIndex(
//       (appointment) => appointment.id === appointmentId
//     );
//     if (appointmentIndex === -1) {
//       console.error("Appointment not found");
//       return null;
//     }
//     appointments[appointmentIndex].status = "cancelled";
//     return appointments[appointmentIndex];
//   } catch (error) {
//     console.error("Error in cancelAppointment", error);
//     throw error;
//   }
// };
// console.log(cancelAppointment(5), "Holiagain");
