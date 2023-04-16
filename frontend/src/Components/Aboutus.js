import  Typography  from '@mui/material/Typography'
import React from 'react'
import NavBar from './NavBar'

const Aboutus = () => {
  return (
    <>
 
    <Typography component="h1" variant="h3" sx={{textAlign:"center",color:'#4caf50',mt:"3rem"}}>
    About Us
  </Typography>
  <Typography component="h4" variant="h8" sx={{textAlign:"center",color:"rgba(0, 0, 0, 0.6)", letterSpacing: ".1rem",mt:"3rem"}}>
    Our mission is to make life easy and simple so that people can concentrate on what really 
    
    <br/>
    matters in their life. We fulfill this mission through our app, Notez. Notez not only
   <br/>
        
          makes people effortlessly stay organized  but also makes sure that they never miss important things. 
       
  </Typography>
   </>
   
  )
}

export default Aboutus