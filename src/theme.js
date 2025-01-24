import { createTheme } from "@mui/material/styles";
// Customize the MUI theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#178044", // Customize primary color
    },
    secondary: {
      main: "#1E1E1E", // Customize secondary color
    },
    text: {
      primary: "#ffffff", // Adjust primary text color
      secondary: "#b3b3b3", // Adjust secondary text color
    },
  },
});
