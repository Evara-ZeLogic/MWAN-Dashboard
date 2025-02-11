import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/authSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
