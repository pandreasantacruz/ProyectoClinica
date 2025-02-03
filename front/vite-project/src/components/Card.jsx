const Card = ({
  date,
  time,
  status,
  medicalHistory,
  reasonConsultation,
  userId,
  user,
}) => {
  return (
    <div>
      <h4>Fecha{date}</h4>
      <h4>Hora: {time}</h4>
      <h4>Estatus: {status} </h4>
      <h4> Historia Medica: {medicalHistory}</h4>
      <h4>Razon de Consulta: {reasonConsultation}</h4>
      <h4> Id del Usuario: {userId}</h4>
      <h4>Usuario: {user}</h4>
      <button>Mostrar Detalle</button>
    </div>
  );
};
export default Card;
