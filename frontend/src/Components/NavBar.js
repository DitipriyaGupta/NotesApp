import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { logout } from "../Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [toggle, setToggle] = useState(false);
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/SignIn");
  };
  const handleCloseDrawer = () => {
    setToggle(!toggle);
  };

  useEffect(() => {}, [userInfo]);

  return (
    <AppBar position="static" sx={{ boxShadow: "0", background: "#fff" }}>
      <Toolbar variant="regular">
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
        {isMobile ? (
          <ul>
            <li>
              {" "}
              <Link to="Home">Home</Link>
            </li>
            <li>
              <Link to="NewCard">New</Link>
            </li>

            <li>
              {" "}
              <Link to="Aboutus">About us</Link>
            </li>
            <li>
              <Link to="Contactus">Contact us</Link>{" "}
            </li>
            <button onClick={logoutHandler}>LOGOUT</button>
          </ul>
        ) : (
          <>
            <IconButton
              edge="start"
              onClick={handleCloseDrawer}
              color="black"
              aria-label="menu"
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={toggle}
              onClose={() => setToggle(false)}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  letterSpacing: ".5px",
                  width: "80vw",
                  marginTop: "40px",
                }}
              >
                <Link
                  to="Home"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon sx={{ color: "#4caf50" }} />
                      </ListItemIcon>
                      <ListItemText primary="Home" sx={{ margin: -3 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to="NewCard"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem>
                    <ListItemButton sx={{ marginTop: "-30px" }}>
                      <ListItemIcon>
                        <NoteAddIcon sx={{ color: "#4caf50" }} />
                      </ListItemIcon>
                      <ListItemText primary="New" sx={{ margin: -3 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to="Aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem>
                    <ListItemButton sx={{ marginTop: "-30px" }}>
                      <ListItemIcon>
                        <InfoIcon sx={{ color: "#4caf50" }} />
                      </ListItemIcon>
                      <ListItemText primary="About us" sx={{ margin: -3 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link
                  to="Contactus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem>
                    <ListItemButton sx={{ marginTop: "-30px" }}>
                      <ListItemIcon>
                        <CallIcon sx={{ color: "#4caf50" }} />
                      </ListItemIcon>
                      <ListItemText primary="Contact us" sx={{ margin: -3 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItemButton
                    sx={{
                      ml: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "-30px",
                      marginLeft: "40px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      onClick={logoutHandler}
                      sx={{ backgroundColor: "#c62828", mt: "10px" }}
                    >
                      LOGOUT
                    </Button>
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
