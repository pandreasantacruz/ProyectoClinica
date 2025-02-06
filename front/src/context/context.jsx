import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userAppointment, setUserAppointment] = useState([]);
  const [loadingAppointments, setLoadingAppointments] = useState(false);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    console.log("Usuario logueado:", userData);
  }; // Guardar en el almacenamiento local

  const logout = () => {
    setUser(null);
    setUserAppointment([]);
    localStorage.removeItem("user");
    //navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      console.log("Usuario cargado desde localStorage:", user); // Verifica que se carga correctamente
    }
  }, []);

  // Obtener turnos del usuario

  const fetchAppointments = async () => {
    if (loadingAppointments || !user) {
      return;
    }

    setLoadingAppointments(true); // Inicia la carga

    const userId = user.id;
    console.log("Requesting appointments for user id:", userId); //
    try {
      const response = await fetch(
        `http://localhost:3000/appointments/${userId}`
      );
      const data = await response.json();
      setUserAppointment(data.appointments);
      console.log(data.appointments, "Respuesta servidor");
    } catch (error) {
      console.error("Error al obtener turnos:", error);
    } finally {
      setLoadingAppointments(false); // Termina la carga
    }
  };
  const cancelAppointment = async (appointmentid) => {
    try {
      await fetch(
        `http://localhost:3000/appointments/cancel/${appointmentid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUserAppointment((prev) =>
        prev.filter((appointment) => appointment.id !== appointmentid)
      );
    } catch (error) {
      console.error("Error al cancelar turno:", error);
    }
  };
  const createAppointment = async (appointmentData) => {
    console.log(user, "Aquitoy");
    const userId = user.id;

    try {
      console.log("Datos enviados al backend:", userId);
      const response = await fetch(
        `http://localhost:3000/appointments/schedule/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...appointmentData, userId }),
        }
      );
      if (response.ok) {
        const newAppointment = await response.json(); // Procesamos la respuesta
        console.log(newAppointment, "newApp");
        return newAppointment; // Devolvemos la nueva cita
      } else {
        throw new Error("Error al crear cita");
      }
    } catch (error) {
      console.error("Error al crear turno:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        login,
        logout,
        userAppointment,
        fetchAppointments,
        cancelAppointment,
        createAppointment,
        loadingAppointments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
