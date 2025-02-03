import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Misturnos = () => {
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

  return (
    <div>
      {turnos.map((turno) => {
        return <Card key={turno.id} {...turno} />;
      })}
    </div>
  );
};
export default Misturnos;
