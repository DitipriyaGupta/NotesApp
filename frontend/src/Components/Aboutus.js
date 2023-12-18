import Typography from "@mui/material/Typography";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
});
const Aboutus = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#4caf50",
          mt: "3rem",
          fontWeight: 600,
        }}
      >
        About us
      </Typography>
      <Typography
        component="h4"
        variant="h8"
        sx={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)", mt: "3rem" }}
      >
        Our mission is to make life easy and simple so that people can
        concentrate on what really
        <br />
        matters in their life. We fulfill this mission through our app.
        <br />
      </Typography>
    </ThemeProvider>
  );
};

export default Aboutus;
