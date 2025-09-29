// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: null,     // "customer" | "PrivateRenter" | "RentalOffice"
  userData: null, // كامل بيانات اليوزر من الباك
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { role, userData, token } = action.payload;
      state.isLoggedIn = true;
      state.role = role;
      state.userData = userData;
      state.token = token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = null;
      state.userData = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
