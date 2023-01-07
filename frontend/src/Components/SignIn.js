
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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import login from "./login.PNG";
import { useNavigate } from "react-router-dom";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useDispatch, useSelector } from "react-redux";
import{login} from '../Redux/Action/userAction'
// import { useHistory } from 'react-router-dom';
import  Alert from '@mui/material/Alert';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });


export default function SignIn() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, seterror] = useState("")
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading,error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/Home");
    }
  }, [navigate, userInfo]);
  // useEffect(() => {
  //   if(servererror === "Request failed with status code 404"){
  //     seterror("No account associated with this email");
  //   }

  // }, [servererror])
  // useEffect(() => {
  //   if(serverError === "Request failed with status code 401"){
  //     setError("Invalid email or password");
  //   }

  // }, [serverError])


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    //  if(email !== "" && password !== ""){
    //   dispatch(userLogin(email, password));
      // if(isAuthenticated){
      //   navigate("/Home")
      // }
    // }
    // else{
    //   setError("Please Provide Your Credentials Properly!")
    // }

  };
  
  return (
    <ThemeProvider theme={theme}>
      {error ? <Alert severity="error">{error}</Alert>:""}
      <Grid container component="main" sx={{ width: '150vh',height:'80vh',mt:'10vh',ml:'40vh'}}>
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
            boxShadow:'5'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          >
            <Typography sx={{fontSize:'3vh'}} component="h1" variant="h5">
            <SaveAsIcon sx={{color:'#4caf50',fontSize:'4vh'}}/>Notez  
            </Typography>
          
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
               <Grid container>
               
                <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                </Grid>
                <Grid item xs>
                  <Link sx={{ml:7,mt:10}} href="#" variant="body2">
                   Forgot password?
                  </Link>
                </Grid>
              </Grid>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,color:"white"}}
                onClick={submitHandler}
              >
                Sign In
              </Button>
              {/* <Typography component="h5" sx={{ml:8}}> Don't have an account?
                <Link sx={{textdecoration:"none",color:"green"}} to onClick={() => navigate("/")}>
                Sign Up
            </Link></Typography>
              */}

               
              {/* <Copyright sx={{ mt: 5 }} /> */}

              <Grid container sx={{ml:7}}>
               
               <Grid item xs >
               Don't have an account?
               </Grid>
               <Grid item xs>
                 <Link  href="#" variant="body2">
                  Sign Up
                 </Link>
               </Grid>
             </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
