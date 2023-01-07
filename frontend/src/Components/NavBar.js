import React from 'react'
import {Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import SaveAsIcon from '@mui/icons-material/SaveAs';
const NavBar = () => {
  return (
    <nav className='nav'>
      
      {/* <div className='title'>Notes</div> */}
     <Typography sx={{fontSize:'3.5vh',mr:55}} component="h1" variant="h5">
            <SaveAsIcon sx={{color:'#4caf50',fontSize:'4vh'}}/>Notez  
            </Typography>
         <ul >
       <li><Link to='Home'>Home</Link></li> 
        <li><Link to='NewCard'>New</Link></li>
       
        <li><Link to='New'>About us</Link></li>
        <li><Link to='New'>Contact us</Link></li>
       
      </ul>
      {/* <li><Link to='New'>Logout</Link></li> */}
     <button>LOGOUT</button>
    </nav>
    
   
  )
}

export default NavBar