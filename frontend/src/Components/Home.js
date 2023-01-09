import * as React from 'react';

import notes,{} from "../data/notes.js"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import NavBar from "./NavBar"

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { listNotes,deleteNoteAction } from "../Redux/Action/noteAction.js";
import  { useEffect } from "react";
export default function Home()  {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const {  error, notes } = noteList;
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const noteDelete = useSelector((state) => state.noteDelete);
  const noteUpdate = useSelector((state) => state.noteUpdate);
  
  useEffect(() => {
    dispatch(listNotes());
    // if (!userInfo) {
    //   navigate("/SignIn");
    
    // }
    },[dispatch]);
    const deleteHandler = (id) => {
      if (window.confirm("Are you sure?")) {
        dispatch(deleteNoteAction(id));
         
      }
    };
 
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
        <Link underline="none" to={`/note/${note._id}`}>
  <Button  sx={{color:"green",ml:"20rem"}} size="big">Edit</Button>
        </Link>
       
         <Button onClick={()=>deleteHandler(note._id)}sx={{color:"red",textAlign:"right"}} size="big">Delete</Button>
       </CardActions>
     </Card>
     
    </Grid>
     
    ))
   
    
   
  );
    
}

