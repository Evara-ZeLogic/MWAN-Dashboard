import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/authSlice";
import projectsReducer from "./projects/projectsSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    pmoProjects: projectsReducer,
  },
});
