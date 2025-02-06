import { useState } from "react";
import { UserContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styles from "../styles/PedirTurno.module.css";

const PedirTurno = () => {
  const { user, createAppointment } = useContext(UserContext); // Accedemos al contexto del usuario

  const navigate = useNavigate();

  const [appointmentSchedule, setAppointmentSchedule] = useState({
    date: "",
    time: "",
    medicalHistory: "",
    reasonConsultation: "",
  });

  const handleChange = (e) => {
    setAppointmentSchedule({
      ...appointmentSchedule,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      alert("Debes estar logueado para pedir una cita.");
      navigate("/login"); // Redirige al login si el usuario no está logueado
      return;
    }

    try {
      // Lógica para crear la cita
      const response = await createAppointment({
        ...appointmentSchedule,
        userId: user.credentials.id,
      });
      alert("Cita agendada exitosamente.");
      console.log(response, "respuesta Servidor");
      navigate(`/appointments/${user.id}`); // Redirige a la página de citas del usuario
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split("T")[0];

  return (
    <div className={styles.pedirTurnoConteiner}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Programa tu cita</h2>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Fecha: </label>
          <input
            className={styles.inputField}
            type="date"
            name="date"
            value={appointmentSchedule.date}
            onChange={handleChange}
            min={minDate}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Hora:</label>
          <input
            className={styles.inputField}
            type="time"
            name="time"
            value={appointmentSchedule.time}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Historia Médica:</label>
          <input
            className={styles.inputField}
            type="text"
            name="medicalHistory"
            value={appointmentSchedule.medicalHistory}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Razón de Consulta:</label>
          <input
            className={styles.inputField}
            type="text"
            name="reasonConsultation"
            value={appointmentSchedule.reasonConsultation}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.pedirTurnoButton}>Programar</button>
        </div>
      </form>
    </div>
  );
};

export default PedirTurno;
