import Typography  from '@mui/material/Typography'
import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import  Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Contactus = () => {
  return (

//     <>  <Typography component="h4" variant="h8" sx={{textAlign:"center",mt:"3rem",color:"rgba(0, 0, 0, 0.6)"}}>
//   for any queries Email us-
//   </Typography>
//   <Typography component="h1" variant="h5" sx={{textAlign:"center",color:"rgba(0, 0, 0, 0.6)", letterSpacing: ".1rem"}}>
//   <AlternateEmailIcon sx={{color:'#4caf50',mt:"2rem"}}/>notezsupport@gmail.com
       
//   </Typography>
<>
<Typography component="h4" variant="h8" sx={{textAlign:"center",mt:"3rem",color:"rgba(0, 0, 0, 0.6)"}}>
   for any queries Email us-
  </Typography>
<Grid sx={{ display: "flex" ,color:"rgba(0, 0, 0, 0.6)", letterSpacing: ".1rem",ml:"41rem",mt:"4rem"}}>
<AlternateEmailIcon sx={{color:"#4CAF50"}} />
<Typography>notezsupport@gmail.com</Typography>
</Grid>
<br/>
<Typography component="h4" variant="h8" sx={{textAlign:"center",mt:"2rem",color:"rgba(0, 0, 0, 0.6)"}}>
   Or
  </Typography>
  <br/>
  <Grid sx={{ display: "flex" ,color:"rgba(0, 0, 0, 0.6)", letterSpacing:"11rem",ml:"44rem",gap:"2rem",mt:"3rem"}}>
<InstagramIcon  sx={{color:"#4CAF50"}} />
<TwitterIcon  sx={{color:"#4CAF50"}} />
< LinkedInIcon sx={{color:"#4CAF50"}} />

</Grid>
   </>
   
  )
}

export default Contactus