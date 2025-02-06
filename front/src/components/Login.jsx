import { useState } from "react";
import { validate } from "../helpers/validate";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import {
  title,
  loginButton,
  loginConteiner,
  inputGroup,
  inputLabel,
  inputField,
  buttonContainer,
} from "../styles/Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const [userDataLogin, setUserDataLogin] = useState({
    email: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;

    setUserDataLogin({
      ...userDataLogin,
      [name]: value,
    });

    if (touched[name]) {
      setErrors(
        validate({
          email: userDataLogin.email || "",
          newPassword: userDataLogin.newPassword || "",
        })
      );
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
        console.log("Datos a enviar:", userDataLogin); // Imprimir los datos

        const response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataLogin),
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("Respuesta del servidor:", userData); // Ver los datos recibidos

          if (userData.user && userData.user.id) {
            // Verifica si 'user' y 'id' existen
            login(userData.user); // Pasa 'user' al contexto
            navigate(`/appointments/${userData.user.id}`); // Redirige con el 'id' correcto
            alert("Ahora puedes ver tus citas");
          } else {
            alert("Credenciales incorrectas");
          }
        } else {
          alert("Credenciales incorrectas");
        }
      } catch (error) {
        console.error("Error en el login:", error);
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
      </div>
    </form>
  );
};

export default Login;
