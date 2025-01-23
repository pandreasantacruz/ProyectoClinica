import IAppointment from "../interface/IAppointment";
import AppointmentDto from "../dto/appointmentDto";

const appointments: IAppointment[] = [];
let id: number = 1;
let idUser:number = {}
export const creatAppointment =async (appointmentData:AppointmentDto): Promise<IAppointment> =>{
    const newAppointment:IAppointment = {
        id,
        userId: appointmentData.userid.


    }
}
