interface AppointmentDto {
  date: Date;
  time: number;
  status: "active" | "cancelled";
  medicalHistory: string;
  reasonConsultation: string;
}

export default AppointmentDto;
