import { useState } from "react";
import { validate } from "../helpers/validate";
import {
  title,
  loginButton,
  loginConteiner,
  inputGroup,
  inputLabel,
  inputField,
  buttonContainer,
} from "../styles/Login.module.css";

const Login = ({ handleLoginOnClose }) => {
  const [userDataLogin, setUserDataLogin] = useState({
    email: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;

    setUserDataLogin({
      ...userDataLogin,
      [name]: value, //En la propiedad que sea name guardo el value
    });

    if (touched[name]) {
      setErrors(validate(setUserDataLogin));
    }
  };
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });

    setErrors(validate(userDataLogin));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setTouched({ email: true, newPassword: true });

    const newErrors = validate(userDataLogin);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataLogin),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error al iniciar sesión");
        }

        console.log("Respuesta del backend:", data);
        alert("Inicio de sesión exitoso");
      } catch (error) {
        alert(error.message);
        console.error("Error:", error);
      }
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };
  return (
    <form className={loginConteiner} onSubmit={handleOnSubmit}>
      <h2 className={title}>Log in</h2>
      <div className={inputGroup}>
        <label className={inputLabel}> Email:</label>
        <input
          className={inputField}
          type="text"
          value={userDataLogin.email}
          name="email"
          placeholder="example@mail.com"
          onChange={handleInputChangeLogin}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Contraseña:</label>
        <input
          className={inputField}
          type="password"
          value={userDataLogin.newPassword}
          name="newPassword"
          placeholder="Contraseña"
          onChange={handleInputChangeLogin}
          onBlur={handleBlur}
        />
        {touched.newPassword && errors.newPassword && (
          <p>{errors.newPassword}</p>
        )}
      </div>
      <div className={buttonContainer}>
        <button className={loginButton}>Log in</button>
        <button onClick={handleLoginOnClose} className={loginButton}>
          Cerrar
        </button>
      </div>
    </form>
  );
};
export default Login;
