import { useEffect } from "react";
import { Card } from "../components/Card";
//import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/context";
import styles from "../styles/Misturnos.module.css";

export const Misturnos = () => {
  const { userAppointment, fetchAppointments } = useContext(UserContext);

  useEffect(() => {
    fetchAppointments(); // Llamamos siempre que el usuario esté logueado y no se esté cargando ya
  }, []);
  useEffect(() => {
    console.log(userAppointment, "hOLAAAAAAA"); // Verifica que los datos sean correctos
  }, [userAppointment]);

  return (
    <div>
      {userAppointment.length > 0 ? (
        userAppointment.map((turno) => <Card key={turno.id} {...turno} />)
      ) : (
        <p className={styles.title}>Aún no tienes turnos agendados.</p>
      )}
    </div>
  );
};
