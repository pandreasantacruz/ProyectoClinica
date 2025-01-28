import { User } from "../entities/user";
interface AppointmentDto {
  date: Date;
  time: string;
  medicalHistory: string;
  reasonConsultation: string;
  userId: number;
}

export default AppointmentDto;
