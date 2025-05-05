// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3F51B5", // Indigo
    },
    secondary: {
      main: "#607D8B", // Blue-grey
    },
    background: {
      default: "#F7F9FC", // Soft light grey
      paper: "#FFFFFF", // Cards and surfaces
    },
    text: {
      primary: "#212121", // Near-black
      secondary: "#555555",
    },
    warning: {
      main: "#FF9800", // Orange accent
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});
export default theme;
