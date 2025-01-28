import { User } from "../entities/user";
import status from "./emutStatus";

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  status: status;
  medicalHistory: string;
  reasonConsultation: string;
  userId: number;
}
export default IAppointment;
