
// import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from "react-router-dom";
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();


 
// export default function SignUp() {
//   const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
    
  
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
        
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//               <button sx={{outline:"none",color: "#1565c0"}} onClick={() => navigate("/SignIn")}>
//               {"Have an account? Sign In"}
//               </button>
                
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
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

// import {userRegister} from '../Redux/Action/userAction'
import { useDispatch, useSelector } from "react-redux";
import  Alert from '@mui/material/Alert';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import{register} from '../Redux/Action/userAction'
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


export default function SignUp() {
  const navigate = useNavigate();
  

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
// const [error, setError] = useState("")


//redux
const  dispatch = useDispatch();

const userRegister = useSelector((state) => state.userRegister);
const { loading,error,userInfo } = userRegister;
//Redirect to Homepage if loggedin
useEffect(() =>{
  if(userInfo){
    navigate("/Home");
  }
}, [navigate,userInfo]);

  //serverside validation
  // useEffect(() =>{
  //   if(serverError !== null){
  //     setError("User with this email address already exist!")
  //   }if(serverError === true){
  //     navigate("/Home")
  //   }
  // }, [serverError,navigate])


const submitHandler = (event) => {
  event.preventDefault();
  dispatch(register(name , email , password));
  // if (name && email && password) {
  //   if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
  //     if(password.match(/^[A-Za-z]\w{8,14}$/)){
  //       dispatch(register(name , email , password));
  //     }
  //     else{
  //       setError("password must be between 8 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter")
  //     }

  //   }
  //   else{
  //     setError("This is not the right email")
  //   }

  // } else {
  //   setError("Please fill all the fields")
  // }  

};
  
  
  return (
    <ThemeProvider theme={theme}>
       {error ? <Alert severity="error">{error}</Alert>:""}
      <Grid container component="main" sx={{ width: '150vh',height:'20vh',mt:'5vh',ml:'40vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://www.digisailor.com/assets/img/careers.gif)',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.green[50] : t.palette.green[900],
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
          
            <Typography component="h1" variant="h5" sx={{mt:3,color:'#4caf50'}}>
             Create Account
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 0 }}>
            {/* <TextField sx={{mt:3}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
             <TextField sx={{mt:3}}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                /> */}
                
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              
              
             
            
              <TextField sx={{mt:3}}
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
                sx={{ mt: 3, mb: 2 ,color:"white",backgroundColor:"#4CAF50"}}
              >
                Sign Up
              </Button>
            
                <Link sx={{textDecoration:"none",textAlign:"center",ml:10,color:"black "}} onClick={() => navigate("/SignIn")}>
               {"Have an account? SignIn"}
            </Link>
               
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
