import { useState } from "react";
import { title, cancelarButton, conteiner } from "../styles/Card.module.css";

export const Card = ({
  date,
  time,
  medicalHistory,
  reasonConsultation,
  id,
  status,
}) => {
  // Definir el estado fuera de la función
  const [appointmentStatus, setAppointmentStatus] = useState(
    status || "active"
  );

  const cancelAppointment = async (id) => {
    if (!id || typeof id !== "number") {
      console.error("Error: appointmentId no válido", id);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/appointments/cancel/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Cita cancelada exitosamente");
        setAppointmentStatus("cancelled"); // Actualizamos el estado de la cita
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al cancelar la cita:", error);
    }
  };

  return (
    <div
      className={conteiner}
      style={{ opacity: appointmentStatus === "cancelled" ? 0.5 : 1 }} // Cambiar a `appointmentStatus`
    >
      <h2 className={title}>Cita: {id}</h2>
      <h4>Fecha: {date}</h4>
      <h4>Hora: {time}</h4>
      <h4>Estado: {appointmentStatus}</h4>
      <h4>Historia Médica: {medicalHistory}</h4>
      <h4>Razón de Consulta: {reasonConsultation}</h4>
      <button
        className={cancelarButton}
        onClick={() => cancelAppointment(id)}
        disabled={appointmentStatus === "cancelled"}
      >
        {appointmentStatus === "cancelled" ? "Cancelada" : "Cancelar"}
      </button>
    </div>
  );
};
