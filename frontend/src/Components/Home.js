import * as React from 'react';

import notes,{} from "../data/notes.js"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NavBar from "./NavBar"

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../Redux/Action/noteAction.js";
import  { useEffect } from "react";
export default function Home()  {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const {  error, notes } = noteList;
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listNotes());
    // if (!userInfo) {
    //   navigate("/SignIn");
    // }
    },[dispatch]);
  return (
  
 notes?.map((note) => (
<Grid container 
direction="column"
alignItems="center"
justifyContent="center"
>

  <Card  sx={{ width:"30rem",
     marginTop:"2rem" ,boxShadow:"2px 2px 10px 2px rgb(0 0 0 / 20%)"
     }}>
       <CardContent sx={{textAlign:"center"}}>
         <Typography gutterBottom variant="h5" component="div">
        {note.title} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {note.content}
         </Typography>
       </CardContent>
       <CardActions >
         <Button href={`/note/${note._id}` } size="small">Edit</Button>
         <Button  sx={{color:"red",textAlign:"right"}} size="small">Delete</Button>
       </CardActions>
     </Card>
     
    </Grid>
     
    ))
   
    
   
  );
    
}

