
import * as React from 'react';
import  { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider  ,useTheme} from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import {userRegister} from '../Redux/Action/userAction'
import { useDispatch, useSelector} from "react-redux";
import  Alert from '@mui/material/Alert';

import useMediaQuery from '@mui/material/useMediaQuery';

  const theme2 = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });


 function Contactus() {
  const navigate = useNavigate();
const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [error, setError] = useState("")

const  dispatch = useDispatch();
const theme = useTheme();
  const isMobile = 
  useMediaQuery(theme.breakpoints.up('md'));
const  { userInfo,serverError }= useSelector((state) => state.userRegister);

useEffect(() =>{
  if(userInfo){
    navigate("/Home");
  }
}, [navigate,userInfo]);

  useEffect(() =>{
    if(serverError === "Request failed with status code 404"){
      setError("User already exists");
    }
  }, [serverError])


const submitHandler = (event) => {
  event.preventDefault();
  
  if (name && email && password) {
    dispatch(userRegister(name , email , password));
    // if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    //   if(password.match(/^[A-Za-z]\w{8,14}$/)){
    //     dispatch(register(name , email , password));
    //   }
    //   else{
    //     setError("password must be between 8 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter")
    //   }

    }

   else {
    setError("Please fill all the fields")
  }  
};
  return (
    
    <ThemeProvider theme={theme2}>
      {error ? <Alert severity="error">{error}</Alert>:""}
 

  <Grid item  xs={10} sm={10} md={5} component={Paper} elevation={6} square sx={{boxShadow:"0",mr:4}}>
  <CssBaseline />
          <Box
            sx={{
              my: 10,
              mx: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          > 

          
            <Typography component="h1" variant="h5" sx={{ml:2,color:'#4caf50'}}>
           Contact Us
            </Typography>
            
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
            <TextField
                  margin="normal"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
             
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
               <TextField
               sx={{mt:2}}
        fullWidth
        required
        id="Comments"
        name="Comments"
        autoComplete="Comments"
        label="Comments"
        multiline
        rows={8}
        rowsMax={9}
        variant="outlined"
        autoFocus
      // value={content}
      //   onChange={(e) => setContent(e.target.value)}
        />
             
             
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2 ,color:"white"}}
              
              >
                Submit
              </Button>
           

            
            </Box>
          </Box>
        </Grid>

       
  
      
    </ThemeProvider>
  );
}
export default Contactus