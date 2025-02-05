import { useState } from "react";

const PedirTurno = () => {
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

  const scheduleApp = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/appointments/schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentSchedule),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Cita programada exitosamente");
        setAppointmentSchedule({
          date: "",
          time: "",
          medicalHistory: "",
          reasonConsultation: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al programar la cita:", error);
    }
  };

  return (
    <div>
      <h2>Programa tu cita</h2>

      <div>
        <label>Fecha: </label>
        <input
          type="date"
          name="date"
          value={appointmentSchedule.date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Hora:</label>
        <input
          type="time"
          name="time"
          value={appointmentSchedule.time}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Historia Médica:</label>
        <input
          type="text"
          name="medicalHistory"
          value={appointmentSchedule.medicalHistory}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Razón de Consulta:</label>
        <input
          type="text"
          name="reasonConsultation"
          value={appointmentSchedule.reasonConsultation}
          onChange={handleChange}
        />
      </div>

      <div>
        <button onClick={scheduleApp}>Programar</button>
      </div>
    </div>
  );
};

export default PedirTurno;
