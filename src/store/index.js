import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/authSlice";
import projectsReducer from "./projects/projectsSlice";
import countedByReducer from "./projects/countedBySlice";
import filterTypeReducer from "./filterType/filterTypeSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    pmoProjects: projectsReducer,
    countedBy: countedByReducer,
    filterType: filterTypeReducer,
  },
});
