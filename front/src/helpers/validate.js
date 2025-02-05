export const validate = (input) => {
  const errors = {};
  if (!input.email.trim()) {
    errors.email = "Username es requerido";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = "Formato invalido de email ";
  }

  if (!input.newPassword.trim()) {
    errors.newPassword = "Contraseña es requerido";
  }
  return errors;
};
