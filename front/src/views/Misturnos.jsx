import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import axios from "axios";

export const Misturnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((res) => {
        console.log(res);
        setTurnos(res.data.appointments);
      })
      .catch((err) => console.log(err, "Error al cargar datos"));
  }, []);
  const handleCancel = (id) => {
    setTurnos((prevTurnos) =>
      prevTurnos.map((turno) =>
        turno.id === id ? { ...turno, status: "cancelled" } : turno
      )
    );
  };

  return (
    <div>
      {turnos.map((turno) => {
        return <Card key={turno.id} {...turno} onCancel={handleCancel} />;
      })}
    </div>
  );
};
