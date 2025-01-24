import IUser from "./IUser";

interface IAppointment {
  id: number;
  userid: IUser["id"];
  date: Date;
  time: number;
  status: "active" | "cancelled";
  medicalHistory: string;
  reasonConsultation: string;
}

export default IAppointment;
