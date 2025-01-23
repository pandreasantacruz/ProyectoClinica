import IUser from "./IUser";

interface IAppointment {
  id: number;
  userid: IUser;
  date: Date;
  status: boolean;
  medicalHistory: string;
  reasonConsultation: string;
}

export default IAppointment;
