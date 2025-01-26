import IUser from "./IUser";

interface IAppointment {
  id: number;
  userid: string;
  date: string;
  time: string;
  status: string; //HACER EMUT
  medicalHistory: string;
  reasonConsultation: string;
}

export default IAppointment;
