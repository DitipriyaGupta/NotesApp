import * as React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import NavBar from "./NavBar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
export default function ImgMediaCard() {

  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
  return (

      
        
     <> 
     
         <ThemeProvider theme={theme}>
        
        <Typography variant="h3"
      align="center">
    </Typography><br /><TextField
        sx={{
          height: 100,
          width: 400,
          ml:10,
          mt:5
          // alignItems:"center"
        }}
        label="Title"
        //   id="margin-none"
        color="primary" /><br /><TextField
        sx={{
          width: 400,
          ml:10
        }}
        label="Write your Note here....."
        multiline
        rows={10}
        rowsMax={9}
        variant="outlined" /><br /><Button
          sx={{
            background: "rgb(84, 187, 87)",
            color: "white",
            padding: "1rem 2rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            fontWeight:"600",mt:"2rem",marginLeft:"10rem"
          }}>
        Save
      </Button>
      </ThemeProvider>
     </>
  );
}

// export default NewNote;
