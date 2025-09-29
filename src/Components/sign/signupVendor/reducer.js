// reducer.js

export const initialStatePrivateRenter = {
  name: "",
  email: "",
  phone_number: "",
  address: "",
  password: "",
  password_confirmation: "",
  car_license_image: null,
  car_license_expiry_date: "",
  role: "private_renter",
  longitude: "30.0595",
  latitude: "31.2234",
};

export const initialStateRentalOffice = {
  name: "",
  email: "",
  phone_number: "",
  address: "",
  password: "",
  password_confirmation: "",
  car_license_image: null,
  car_license_expiry_date: "",
  role: "rental_office",
  longitude: "30.0595",
  latitude: "31.2234",
  commercial_registration_number: "",
};
// rental_office
export default function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return { ...action.payload };

    default:
      return state;
  }
}
