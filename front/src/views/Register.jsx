import { useState } from "react";
import { useUser } from "../context/useUser";
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
import { useNavigate } from "react-router-dom"; // Para redirigir

const Register = () => {
  const { setUser } = useUser();
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

  const navigate = useNavigate(); // Hook para navegación

  const handleInputChangeRegister = (event) => {
    const { name, value } = event.target;

    setUserDataRegister({
      ...userDataRegister,
      [name]: value,
    });

    if (touched[name]) {
      setErrors(validateRegister(userDataRegister));
    }

    if (name === "email") {
      setUserDataRegister({
        ...userDataRegister,
        email: value,
        username: value,
      });
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });

    setErrors(validateRegister(userDataRegister));
  };

  const handleOnSubmit = async (event) => {
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
      try {
        alert(`Te has registrado con el usuario: ${userDataRegister.username}`);

        const userDataToSend = {
          ...userDataRegister,
          username: userDataRegister.email, // El backend usa el email como username
        };

        // Hacemos la petición para registrar al usuario
        const response = await fetch("http://localhost:3000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataToSend),
        });
        console.log(userDataToSend, "es el user data que se envia");
        const data = await response.json();
        console.log("Respuesta del backend:", data);

        // Ahora hacemos el login automático
        const loginResponse = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userDataToSend.email,
            newPassword: userDataToSend.newPassword,
            id: data.newUser.id,
          }),
        });
        const loginData = await loginResponse.json();
        console.log("Usuario logueado:", loginData);
        // Guardar usuario en el contexto global
        setUser(loginData.user);

        // Redirigir al home después del login
        navigate("/home");
      } catch (error) {
        console.error("Error en el registro o login automático:", error);
        alert("Hubo un error, intenta nuevamente.");
      }
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <form className={registerConteiner} onSubmit={handleOnSubmit}>
      <h2 className={title}>Regístrate</h2>

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
        <label className={inputLabel}>Email:</label>
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
        <label className={inputLabel}>Fecha de Nacimiento:</label>
        <input
          className={inputField}
          type="date"
          value={userDataRegister.birthday}
          name="birthday"
          placeholder="YYYY-MM-DD"
          onChange={handleInputChangeRegister}
          onBlur={handleBlur}
          max={today}
        />
        {touched.birthday && errors.birthday && <p>{errors.birthday}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}>Tipo de Documento:</label>
        <select
          className={inputField}
          value={userDataRegister.nDniType}
          onChange={(e) => handleInputChangeRegister(e)}
          name="nDniType"
          onBlur={handleBlur}
        >
          <option value="">-- Selecciona --</option>
          <option value="Registro civil">Registro civil</option>
          <option value="Tarjeta identidad">Tarjeta identidad</option>
          <option value="Cédula ciudadanía">Cédula ciudadanía</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Tarjeta extranjería">Tarjeta extranjería</option>
          <option value="Permiso especial de permanencia">
            Permiso especial de permanencia
          </option>
        </select>
        {touched.nDniType && errors.nDniType && <p>{errors.nDniType}</p>}
      </div>

      <div className={inputGroup}>
        <label className={inputLabel}>Número de Documento:</label>
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
        <label className={inputLabel}>Contraseña</label>
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
      </div>
    </form>
  );
};

export default Register;
