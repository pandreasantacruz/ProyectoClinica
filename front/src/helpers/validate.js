export const validate = (input) => {
  const errors = {};
  if (!input.username.trim()) {
    errors.username = "Username es requerido";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.username)) {
    errors.username = "Formato invalido de email ";
  }

  if (!input.password.trim()) {
    errors.password = "Contraseña es requerido";
  }
  return errors;
};
