

export default function validate(values) {
  const errors = {};

  // Name
  if (!values.name) {
    errors.name = "Name is required";
  }

  // Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Phone Number
  if (!values.phone_number) {
    errors.phone_number = "Phone number is required";
  } else if (!/^[0-9]{10,15}$/.test(values.phone_number)) {
    errors.phone_number = "Phone number must be 10–15 digits";
  }

  // Driving License Upload
  if (!values.car_license_image) {
    errors.car_license_image = "You must upload your ID / Driving License";
  }

  // Car License Expiry Date
  if (!values.car_license_expiry_date) {
    errors.car_license_expiry_date = "Car license expiry date is required";
  }

  // Commercial Registration (لو هو Rental Office)
  if (values.commercial_registration_number !== undefined && values.commercial_registration_number.trim() === "") {
    errors.commercial_registration_number = "Commercial Registration number is required";
  }

  // Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Confirm Password
  if (!values.password_confirmation) {
    errors.password_confirmation = "Please confirm your password";
  } else if (values.password_confirmation !== values.password) {
    errors.password_confirmation = "Passwords do not match";
  }

  return errors;
}
