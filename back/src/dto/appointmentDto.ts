import { User } from "../entities/user";
interface AppointmentDto {
  date: Date;
  time: string;
  medicalHistory: string;
  reasonConsultation: string;
  userid?: number;
}

export default AppointmentDto;
