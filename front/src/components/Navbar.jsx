import { useContext } from "react";
import { UserContext } from "../context/context"; // Importar contexto de usuario
import { nav, navButton } from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(UserContext); // Obtener usuario y función de logout

  return (
    <div>
      <nav className={nav}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/nuestrosservicios"}>Nuestros Servicios</Link>
        <Link to={"/nuestrahistoria"}>Nuestra Historia</Link>
        <Link to={"/contact"}>Contacto</Link>

        {/* Mostrar enlaces de citas solo si el usuario está logueado */}
        {user && (
          <>
            <Link to={`/appointments/${user.id}`}>Mis Citas</Link>
            <Link to={`/appointments/schedule/${user.id}`}>Pedir Cita</Link>
          </>
        )}

        {/* Mostrar Login y Register solo si el usuario NO está logueado */}
        {!user ? (
          <>
            <Link to={"/login"}>
              <button className={navButton}>Login</button>
            </Link>
            <Link to={"/register"}>
              <button className={navButton}>Register</button>
            </Link>
          </>
        ) : (
          // Mostrar Logout si el usuario está logueado
          <button className={navButton} onClick={logout}>
            Cerrar Sesión
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
