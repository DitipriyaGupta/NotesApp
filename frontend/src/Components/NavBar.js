import React from 'react'
import {Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { logout } from "../Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from './SignIn';
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/SignIn")
  };

  useEffect(() => {},
   [userInfo]);
  
  return (
    <nav className='nav'>
      
      {/* <div className='title'>Notes</div> */}
     <Typography sx={{fontSize:'3.5vh',mr:55}} component="h1" variant="h5">
            <SaveAsIcon sx={{color:'#4caf50',fontSize:'4vh'}}/>Notez  
            </Typography>
         <ul >
          {userInfo?
          <> <li><Link to='Home'>Home</Link></li> 
        <li><Link to='NewCard'>New</Link></li>
       
        <li><Link to='Aboutus'>About us</Link></li>
        <li><Link to='Contactus'>Contact us</Link></li>
        <button onClick={logoutHandler}>LOGOUT</button>
        </>
         :<><li><Link to='Aboutus'>About us</Link></li>
         <li><Link to='Contactus'>Contact us</Link></li></>}
       
      </ul>
      {/* <li><Link to='New'>Logout</Link></li> */}
    
    </nav>
    
   
  )
}

export default NavBar