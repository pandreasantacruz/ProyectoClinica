import AppointmentDto from "../dto/appointmentDto";
import { AppDataSource } from "../config/data-source";
import { Appointments } from "../entities/appointments";
import { User } from "../entities/user";
import { parse } from "path";
// const appointments: IAppointment[] = [
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
// ];

export const getAppointmentsService = async (
  userid: number
): Promise<Appointments[]> => {
  try {
    const appointments = await AppDataSource.getRepository(Appointments).find({
      where: { user: { id: userid } },
    });
    return appointments;
  } catch (error) {
    console.log("Error at Appointments Service", error);
    throw Error;
  }
};
export const getAppointmentByIdService = async (
  appointmentId: number
): Promise<Appointments | null> => {
  try {
    const appointment = await AppDataSource.getRepository(
      Appointments
    ).findOneBy({
      id: appointmentId,
    });
    return appointment || null;
  } catch (error) {
    console.log("Error at Get Appointment By Id Service", error);
    throw Error;
  }
};

export const createAppointmentService = async (
  userData: AppointmentDto
): Promise<Appointments> => {
  try {
    const appointmentRepository = AppDataSource.getRepository(Appointments);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userData.userid });

    if (!user) {
      throw new Error("User not found");
    }

    const newAppointment = appointmentRepository.create({
      date: userData.date,
      time: userData.time,
      medicalHistory: userData.medicalHistory,
      reasonConsultation: userData.reasonConsultation,
      user: { id: userData.userid },
    });

    await appointmentRepository.save(newAppointment);

    return newAppointment;
  } catch (error) {
    console.log("Error create Appointment Service", error);
    throw new Error("Could not create appointment. Please try again.");
  }
};

export const cancelAppointmentService = async (
  id: number
): Promise<Appointments | null> => {
  const appointment = await AppDataSource.getRepository(Appointments).findOneBy(
    { id }
  );
  if (appointment) {
    appointment.status = "cancelled";
    await AppDataSource.getRepository(Appointments).save(appointment);
    return appointment;
  }
  return null;
};
