import {
  parrafo,
  titulo,
  bannerContainer,
  bannerImg,
  img1,
  img2,
} from "../styles/OurStory.module.css";
import imagen1 from "../assets/OurStory1.png";
import imagen2 from "../assets/OurStory2.png";
const OurStory = () => {
  return (
    <>
      <div className={bannerContainer}>
        <img src={imagen1} alt="Imagen 1" className={`${bannerImg} ${img1}`} />
        <img src={imagen2} alt="Imagen 2" className={`${bannerImg} ${img2}`} />
      </div>
      <div>
        <p className={titulo}>
          Nuestra Historia: El Compromiso con la Salud que Crece Cada Día
        </p>
        <p className={parrafo}>
          En 2001, un grupo de profesionales de la salud con un fuerte
          compromiso hacia el bienestar de las personas decidió unirse para
          crear algo más que una clínica: un lugar donde cada paciente fuera
          tratado con respeto, cuidado y un enfoque humano.
          <br /> <br />
          Así nació <strong>Clinica Valle de Atriz</strong>, un sueño hecho
          realidad con la misión de brindar atención médica de alta calidad,
          accesible y cálida. Desde nuestros primeros días, nos enfocamos en
          ofrecer una atención integral, respetuosa y personalizada. Cada paso
          que hemos dado ha sido guiado por nuestro compromiso con la salud de
          la comunidad. Nuestros médicos, enfermeros y personal administrativo
          son parte de una gran familia que entiende que cada paciente tiene una
          historia única, y es por ello que nos aseguramos de estar presentes en
          cada momento importante. <br />
          <br />
          Con el tiempo, nuestra clínica ha crecido. Hemos incorporado nuevas
          especialidades, adaptado nuestras instalaciones a los avances
          tecnológicos más recientes y, sobre todo, mantenido intacto el trato
          cercano y profesional que nuestros pacientes merecen. Nos hemos
          mantenido fieles a nuestros valores:{" "}
          <strong> integridad, excelencia y empatía.</strong>
          <br />
          <br />
          Hoy, Clinica Valle de Atriz es más que un centro de salud; es un lugar
          donde nuestros pacientes confían en recibir el mejor cuidado posible.
          <strong> Con más de 20 años de experiencia</strong> y un equipo
          comprometido con su bienestar, seguimos mirando al futuro con
          optimismo, siempre buscando la mejor manera de acompañar a nuestros
          pacientes en su camino hacia una vida más saludable. <br />
          <br />
          Nuestro objetivo es claro:{" "}
          <strong>
            seguir siendo un referente en la atención médica de calidad,{" "}
          </strong>{" "}
          basada en la experiencia, el respeto y la confianza que cada uno de
          nuestros pacientes nos brinda.
        </p>
      </div>
    </>
  );
};

export default OurStory;
