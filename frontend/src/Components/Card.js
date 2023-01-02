import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NavBar from "./NavBar"

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';
export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
  
    <>
   
    <Grid container spacing={3}>
    <Grid item xs={3}>
    <Card  sx={{ maxWidth: 345,
    marginTop:"2rem"
    }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"green"}} onClick={() => navigate("/NewCard")} size="small">Edit</Button>
        <Button  sx={{color:"red"}} size="small">Delete</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card  sx={{ maxWidth: 345,marginTop:"2rem"
    }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"green"}}size="small">Edit</Button>
        <Button  sx={{color:"red"}} size="small">Delete</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
   
    </>
   
  );
}