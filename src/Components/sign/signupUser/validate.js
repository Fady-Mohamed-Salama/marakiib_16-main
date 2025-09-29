export const validate = (state) => {
  const errors = {};

  if (!state.name.trim()) errors.name = "Please enter your name";

  if (!state.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!state.phone_number.trim()) {
    errors.phone_number = "Please enter your phone_number number";
  } else if (!/^\d{8,15}$/.test(state.phone_number)) {
    errors.phone_number = "Please enter a valid phone_number number";
  }

  if (!state.address.trim()) errors.address = "Please enter your address";

  if (!state.driving_license_image) errors.driving_license_image = "Please upload your driving driving_license_image image";

  if (!state.password) {
    errors.password = "Please enter your password";
  } else if (state.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (state.password !== state.password_confirmation) {
    errors.password_confirmation = "Passwords do not match";
  }

  return errors;
};
