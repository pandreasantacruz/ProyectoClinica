import { title, cancelarButton, conteiner } from "../styles/Card.module.css";

const Card = ({ date, time, status, medicalHistory, reasonConsultation }) => {
  return (
    <div className={conteiner}>
      <h2 className={title}>Cita: </h2>
      <h4>Fecha: {date}</h4>
      <h4>Hora: {time}</h4>
      <h4>Estatus: {status} </h4>
      <h4> Historia Medica: {medicalHistory}</h4>
      <h4>Razon de Consulta: {reasonConsultation}</h4>
      <button className={cancelarButton}>Cancelar</button>
    </div>
  );
};
export default Card;
