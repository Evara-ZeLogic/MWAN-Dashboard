import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardView from "./pages/DashboardView";
import DashboardProjects from "./pages/DashboardProjects";
import ChartFullScreen from "./pages/ChartFullScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      { path: "/dashboard/projects", element: <DashboardProjects /> },
      {
        path: "/chart-full",
        element: <ChartFullScreen />,
      },
    ],
  },
]);
