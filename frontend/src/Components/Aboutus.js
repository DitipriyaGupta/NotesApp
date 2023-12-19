import  Typography  from '@mui/material/Typography'
import React from 'react'
import NavBar from './NavBar'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
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
        [theme.breakpoints.down('sm')]: {
          fontWeight: 600,
          fontSize:"2rem"
        }
      }}
    >
      About us
    </Typography>
    <Typography
      component="h4"
      variant="h8"
      sx={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)", mt: "3rem",fontSize:"1.5rem",  fontWeight:500,margin: '40px 100px',  [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
        margin: '20px 40px',
        fontWeight:600 // Add space from left and right in mobile
      }, }}
    >
      Our mission is to make life easy and simple so that people can
      concentrate on what really
      
      matters in their life. We fulfill this mission through our app.
    
    </Typography>
  </ThemeProvider>

  )
}

export default Aboutus