import { useState } from "react";
import { validateRegister } from "../helpers/validateRegister";
import {
  title,
  registerButton,
  buttonContainer,
  registerConteiner,
  inputGroup,
  inputLabel,
  inputField,
} from "../styles/Register.module.css";

const Register = ({ handleOnClose }) => {
  const [userDataRegister, setUserDataRegister] = useState({
    name: "",
    email: "",
    birthday: "",
    nDniType: "",
    nDni: "",
    newPassword: "",
    username: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChangeRegister = (event) => {
    const { name, value } = event.target;

    setUserDataRegister({
      ...userDataRegister,
      [name]: value,
    });

    if (touched[name]) {
      setErrors(validateRegister(setUserDataRegister));
    }
    if (name === "email") {
      setUserDataRegister({
        ...userDataRegister,
        username: value,
      });
    }
  };
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });

    setErrors(validateRegister(userDataRegister));
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();

    setTouched({
      username: true,
      newPassword: true,
      name: true,
      email: true,
      birthday: true,
      nDniType: true,
      nDni: true,
    });

    const newErrors = validateRegister(userDataRegister);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Te has registrado con el usuario: ${userDataRegister.username}`);

      const userDataToSend = {
        ...userDataRegister,
        username: userDataRegister.email,
      };
      fetch("http://localhost:3000/users/register", {
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
    <form className={registerConteiner} onSubmit={handleOnSubmit}>
      <h2 className={title}>Registrate</h2>
      <div className={inputGroup}>
        <label className={inputLabel}>Nombre: </label>
        <input
          className={inputField}
          type="text"
          value={userDataRegister.name}
          name="name"
          placeholder="Maria Lopez"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Email:</label>
        <input
          className={inputField}
          type="text"
          value={userDataRegister.email}
          name="email"
          placeholder="example@mail.com"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Fecha de Nacimiento:</label>
        <input
          className={inputField}
          type="date"
          value={userDataRegister.birthday}
          name="birthday"
          placeholder="YYYY-MM-DD"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.birthday && errors.birthday && <p>{errors.birthday}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Tipo de Documento de Identidad:</label>
        <select
          className={inputField}
          value={userDataRegister.nDniType}
          onChange={(e) => handleInputChangeRegister(e)}
          type="string"
          name="nDniType"
          onBlur={handleBlur}
        >
          <option value="">-- Selecciona --</option>
          <option value="Registro civil">Registro civil</option>
          <option value="Tarjeta identidad">Tarjeta identidad</option>
          <option value="Cédula ciudadanía">Cédula ciudadanía</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Tarjeta extranjería">Tarjeta extranjería</option>
          <option value=" Permiso especial de permanencia">
            Permiso especial de permanencia
          </option>
        </select>
        {touched.nDniType && errors.nDniType && <p>{errors.nDniType}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Numero de Documento:</label>
        <input
          className={inputField}
          type="number"
          value={userDataRegister.nDni}
          name="nDni"
          placeholder="10301562"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.nDni && errors.nDni && <p>{errors.nDni}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}> Contraseña</label>
        <input
          className={inputField}
          type="password"
          value={userDataRegister.newPassword}
          name="newPassword"
          placeholder="Contraseña"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.newPassword && errors.newPassword && (
          <p>{errors.newPassword}</p>
        )}
      </div>
      <div className={buttonContainer}>
        <button className={registerButton}>Registrarse</button>
        <button onClick={handleOnClose} className={registerButton}>
          Cerrar
        </button>
      </div>
    </form>
  );
};
export default Register;
