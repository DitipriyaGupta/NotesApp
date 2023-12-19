import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import signUp from "../assests/signUp.png";
const theme2 = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
});

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  const { userInfo, serverError } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (userInfo) {
      navigate("/SignIn");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (serverError === "Request failed with status code 404") {
      setError("User already exists");
    }
  }, [serverError]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (name && email && password) {
      dispatch(userRegister(name, email, password));
    } else {
      setError("Please fill all the fields");
    }
  };
  return (
    <ThemeProvider theme={theme2}>
      {error ? <Alert severity="error">{error}</Alert> : ""}

      {isMobile ? (
        <Grid
          container
          component="main"
          sx={{ width: "150vh", mt: "10vh", ml: "34vh" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: `url(${signUp})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "",
              backgroundPosition: "center",
              boxShadow: "2",
            }}
          />
          <Grid
            item
            sx={{ boxShadow: "2" }}
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Container sx={{ display: "flex", ml: 15 }}>
                <SaveAsIcon sx={{ color: "#4caf50", fontSize: "4vh" }} />
                <Typography
                  sx={{
                    fontSize: "3vh",
                    color: "black",
                    fontWeight: "bold",
                    ml: "2px",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Notez
                </Typography>
              </Container>

              <Typography
                component="h1"
                variant="h5"
                sx={{ mt: 5, ml: 2, color: "#4caf50" }}
              >
                Create Account
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={submitHandler}
                sx={{ mt: 1 }}
              >
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
                  sx={{ mt: 3, mb: 2, color: "white" }}
                  onClick={submitHandler}
                >
                  Sign Up
                </Button>

                <Grid container sx={{ cursor: "pointer" }}>
                  <Grid item xs sx={{ ml: 4 }}>
                    Have an account?
                  </Grid>
                  <Grid item xs sx={{ marginLeft: -21 }}>
                    <Link
                      sx={{ textDecoration: "none", color: "#4caf50" }}
                      to
                      onClick={() => navigate("/SignIn")}
                    >
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid
            item
            xs={10}
            sm={10}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ boxShadow: "0" }}
          >
            <Box
              sx={{
                my: 10,
                mx: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Grid sx={{ display: "flex", mt: 2 }}>
                {" "}
                <SaveAsIcon sx={{ color: "#4caf50", fontSize: "4vh" }} />
                <Typography
                  sx={{
                    fontSize: "3vh",
                    color: "black",
                    fontWeight: "bold",
                    ml: "2px",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Notez
                </Typography>
              </Grid>
              <Typography
                component="h1"
                variant="h5"
                sx={{ mt: 5, ml: 2, color: "#4caf50" }}
              >
                Create Account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={submitHandler}
                sx={{ mt: 1 }}
              >
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
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoFocus
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: "white" }}
                  onClick={submitHandler}
                >
                  Sign Up
                </Button>

                <Grid container sx={{ ml: 2, mb: 4, mt: 4 }}>
                  <Grid item xs>
                    Have an account?
                  </Grid>
                  <Grid item xs sx={{ marginLeft: -17 }}>
                    <Link
                      style={{ textDecoration: "none", color: "#4caf50" }}
                      to
                      onClick={() => navigate("/SignIn")}
                    >
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </>
      )}
    </ThemeProvider>
  );
}
export default SignUp;
