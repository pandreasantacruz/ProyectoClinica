export const validate = (values) => {
  let errors = {};

  if (!values.email || values.email.trim() === "") {
    errors.email = "El email es obligatorio";
  }

  if (!values.newPassword || values.newPassword.trim() === "") {
    errors.newPassword = "La contraseña es obligatoria";
  }

  return errors;
};
