import styles from "../styles/Home.module.css";
import img1 from "../assets/Home1.png";
import img2 from "../assets/Home2.png";

const Home = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <img
          src={img1}
          alt="Imagen 1"
          className={`${styles.bannerImg} ${styles.img1}`}
        />
        <img
          src={img2}
          alt="Imagen 2"
          className={`${styles.bannerImg} ${styles.img2}`}
        />
      </div>
      <div>
        <p className={styles.titulo}>
          Nuestra Clínica: Un Compromiso con la Excelencia y la Salud
        </p>
        <p className={styles.parrafo}>
          En Clinica Valle de Atriz, contamos con más de
          <strong> 20 años de experiencia </strong>
          en el cuidado y tratamiento de nuestros pacientes. A lo largo de los
          años, hemos logrado posicionarnos como un referente en la atención
          médica, ofreciendo servicios de alta calidad con un enfoque humano y
          personalizado.
          <br />
          <br /> Nuestra vasta experiencia nos ha permitido mejorar
          constantemente nuestros métodos y procedimientos, integrando
          tecnologías de vanguardia y prácticas innovadoras que garantizan los
          mejores resultados para nuestra comunidad.{" "}
          <strong>
            {" "}
            Gracias a un equipo de profesionales altamente calificados y
            comprometidos con la salud de nuestros pacientes,
          </strong>{" "}
          logramos mantener una excelente reputación basada en la confianza y
          satisfacción de quienes han confiado en nosotros. En Clinica Valle de
          Atriz, entendemos que <strong>cada paciente es único,</strong> por lo
          que nos aseguramos de brindar un trato individualizado, adecuado a las
          necesidades de cada uno.
          <br />
          <br /> Nuestro compromiso con la salud y bienestar de nuestros
          pacientes es lo que nos impulsa a seguir mejorando día tras día.
        </p>
      </div>
    </>
  );
};
export default Home;
