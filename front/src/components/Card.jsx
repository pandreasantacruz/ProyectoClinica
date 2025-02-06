import { useState, useContext } from "react";
import { UserContext } from "../context/context";
import { title, cancelarButton, conteiner } from "../styles/Card.module.css";

export const Card = ({
  date,
  time,
  medicalHistory,
  reasonConsultation,
  id,
  status,
}) => {
  const { cancelAppointment } = useContext(UserContext); // Usamos contexto
  const [appointmentStatus, setAppointmentStatus] = useState(
    status || "active"
  );

  const handleCancel = async () => {
    await cancelAppointment(id);
    setAppointmentStatus("cancelled"); // Actualizar estado local
  };

  return (
    <div
      className={conteiner}
      style={{ opacity: appointmentStatus === "cancelled" ? 0.5 : 1 }}
    >
      <h2 className={title}>Cita: {id}</h2>
      <h4>Fecha: {date}</h4>
      <h4>Hora: {time}</h4>
      <h4>Estado: {appointmentStatus}</h4>
      <h4>Historia Médica: {medicalHistory}</h4>
      <h4>Razón de Consulta: {reasonConsultation}</h4>
      <button
        className={cancelarButton}
        onClick={handleCancel}
        disabled={appointmentStatus === "cancelled"}
      >
        {appointmentStatus === "cancelled" ? "Cancelada" : "Cancelar"}
      </button>
    </div>
  );
};
