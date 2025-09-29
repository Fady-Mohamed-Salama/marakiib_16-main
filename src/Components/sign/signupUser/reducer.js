export const initialState = {
  name: "",
  email: "",
  phone_number: "",
  address: "",
  password: "",
  password_confirmation: "",
  driving_license_image: null,
  role: "customer",
  longitude: "30.0595",
  latitude: "31.2234",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};