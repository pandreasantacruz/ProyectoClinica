import { nav, navButton } from "../styles/Navbar.module.css";
import Register from "../views/Register";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleLoginOnClose = () => {
    setShowLogin(false);
  };
  const [showRegister, setShowRegister] = useState(false);
  const handlerRegisterClick = () => {
    setShowRegister(true);
  };
  const handleOnClose = () => {
    setShowRegister(false);
  };
  return (
    <div>
      <nav className={nav}>
        <Link to={"/home"}>Home </Link>
        <Link to={"/nuestrosservicios"}>Nuestros Servicios </Link>
        <Link to={"nuestrahistoria"}> Nuestra Historia </Link>
        <Link to={"/contact"}> Contacto </Link>

        <button onClick={handleLoginClick} className={navButton}>
          Login
        </button>
        <button onClick={handlerRegisterClick} className={navButton}>
          Register
        </button>
      </nav>
      {showRegister && <Register handleOnClose={handleOnClose} />}
      {showLogin && <Login handleLoginOnClose={handleLoginOnClose} />}
    </div>
  );
};

export default Navbar;
