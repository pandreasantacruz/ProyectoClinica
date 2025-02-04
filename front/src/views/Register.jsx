import { useState } from "react";
import { validateRegister } from "../helpers/validateRegister";

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
    <form onSubmit={handleOnSubmit}>
      <h2>Register</h2>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={userDataRegister.name}
          name="name"
          placeholder="Maria Lopez"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label> Email:</label>
        <input
          type="text"
          value={userDataRegister.email}
          name="email"
          placeholder="example@mail.com"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label> Fecha de Nacimiento:</label>
        <input
          type="date"
          value={userDataRegister.birthday}
          name="birthday"
          placeholder="YYYY-MM-DD"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.birthday && errors.birthday && <p>{errors.birthday}</p>}
      </div>

      <div>
        <label> Tipo de Documento de Identidad:</label>
        <select
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

      <div>
        <label> Numero de Documento:</label>
        <input
          type="number"
          value={userDataRegister.nDni}
          name="nDni"
          placeholder="10301562"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
        />
        {touched.nDni && errors.nDni && <p>{errors.nDni}</p>}
      </div>

      <div>
        <label> Contraseña</label>
        <input
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
      <button>Registrarse</button>
      <button onClick={handleOnClose}>Cerrar</button>
    </form>
  );
};
export default Register;
