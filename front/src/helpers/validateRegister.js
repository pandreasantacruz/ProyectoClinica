export const validateRegister = (input) => {
  const errors = {};
  if (!input.email.trim()) {
    errors.email = "Username es requerido";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = "Formato invalido de email ";
  }

  if (!input.newPassword.trim()) {
    errors.newPassword = "Contraseña es requerido";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(input.newPassword)
  ) {
    errors.newPassword =
      "La contraseña debe tener al menos 6 caracteres entre numeros y letras";
  }
  if (!input.name.trim()) {
    errors.name = "Nombre es requerido";
  }
  if (!input.birthday.trim()) {
    errors.birthday = "Fecha de nacimiento es requerido";
  }
  if (!input.nDniType.trim()) {
    errors.nDniType = "Tipo de documento es requerido";
  }
  if (!input.nDni.trim()) {
    errors.nDni = "Numero de documento es requerido";
  }

  return errors;
};
