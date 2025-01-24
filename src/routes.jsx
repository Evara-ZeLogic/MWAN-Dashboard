import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardView from "./pages/DashboardView";
import DashboardProjects from "./pages/DashboardProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardView />,
      },
      { path: "/dashboard/projects", element: <DashboardProjects /> },
    ],
  },
]);
