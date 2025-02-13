import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/authSlice";
import projectsReducer from "./projects/projectsSlice";
import countedByReducer from "./projects/countedBySlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    pmoProjects: projectsReducer,
    countedBy: countedByReducer,
  },
});
