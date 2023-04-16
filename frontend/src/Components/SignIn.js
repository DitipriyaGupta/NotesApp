
import * as React from 'react';
import  { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useDispatch, useSelector } from "react-redux";
import{userLogin} from '../Redux/Action/userAction'
import  Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';


  const theme2 = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });


 function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("")
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = 
  useMediaQuery(theme.breakpoints.up('md'));
  const {userInfo,serverError} = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo) {
      navigate("/Home");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if(serverError === "Request failed with status code 401"){
      setError("Invalid email or password");
    }

  }, [serverError])

  const submitHandler = (e) => {
    e.preventDefault(); 
   if(email !== "" && password !== ""){
     dispatch(userLogin(email, password));
    }
    else{
      setError("Please fill all the fields")
    }
  };
  
  
  return (
    <ThemeProvider theme={theme2}>
      {error ? <Alert severity="error">{error}</Alert>:""}
 
{
  isMobile?
    <Grid container component="main" sx={{ width: '150vh',height:'70vh',mt:'12vh',ml:'38vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
        
            backgroundImage: 'url(https://lirp.cdn-website.com/3d7ac03c/dms3rep/multi/opt/In+the+office-amico-1920w.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:'3'
          }}
        />
        <Grid item sx={{boxShadow:"2"}}xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          >
            <Container sx={{display:"flex",ml:15}}> <SaveAsIcon sx={{color:'#4caf50',fontSize:'4vh'}}/>    
      <Typography sx={{fontSize:'3.5vh',color:"black"
   }}component="h1" variant="h5" >
            Notez  
            </Typography></Container>
 
          
            <Typography component="h1" variant="h5" sx={{mt:5,ml:2,color:'#4caf50'}}>
              Welcome Back !
            </Typography>
            
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
            
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,color:"white"}}
                onClick={submitHandler}
              >
                Sign In
              </Button>
           

              <Grid container sx={{ml:9}}>
               
               <Grid item xs >
               Don't have an account?
               </Grid>
               <Grid item xs sx={{mr:5}}>
                 <Link  sx={{textDecoration:"none",color:"#4caf50"}} to onClick={() => navigate("/")}>
                  Sign Up
                 </Link>
               </Grid>
             </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  :<>
       <Grid item  xs={10} sm={10} md={5} component={Paper} elevation={6} square sx={{boxShadow:"0",mr:4}}>
          <Box
            sx={{
              my: 10,
              mx: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          > <Grid sx={{display:"flex",mt:2}}><SaveAsIcon sx={{color:'#4caf50',fontSize:'4vh'}}/>  
            <Typography sx={{fontSize:'3vh'}} component="h1" variant="h5">Notez
           
            </Typography>
          </Grid>
          
            <Typography component="h1" variant="h5" sx={{mt:5,ml:2,color:'#4caf50'}}>
              Welcome Back !
            </Typography>
            
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color="primary"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
            
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,color:"white"}}
                onClick={submitHandler}
              >
                Sign In
              </Button>
           

              <Grid container sx={{mt:4,ml:5}}>
               
               <Grid item md={10}>
               Don't have an account?
               </Grid>
               <Grid item sx={{ml:1}}>
                 <Link  sx={{textDecoration:"none",color:"#4caf50"}} to onClick={() => navigate("/")}>
                  Sign Up
                 </Link>
               </Grid>
             </Grid>
            </Box>
          </Box>
        </Grid>
  
  </>
}
      
    </ThemeProvider>
  );
}
export default SignIn;