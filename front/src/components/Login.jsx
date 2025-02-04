import { useState } from "react";
import { validate } from "../helpers/validate";

const Login = ({ handleLoginOnClose }) => {
  const [userDataLogin, setUserDataLogin] = useState({
    username: "",
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

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTouched({ username: true, newPassword: true });

    const newErrors = validate(userDataLogin);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(` Te haz Logeado con el Usuario: ${userDataLogin.username}`);

      const userDataToSend = {
        ...userDataLogin,
      };

      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDataToSend),
      })
        .then((response) => response.json())
        .then((data) => console.log("Respuesta del backend:", data))
        .catch((error) => console.error("Error:", error));
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Login</h2>
      <div>
        <label> Email:</label>
        <input
          type="text"
          value={userDataLogin.username}
          name="username"
          placeholder="example@mail.com"
          onChange={handleInputChangeLogin}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label> Contraseña</label>
        <input
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

      <button>Log in</button>
      <button onClick={handleLoginOnClose}>Cerrar</button>
    </form>
  );
};
export default Login;
