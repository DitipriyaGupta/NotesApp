import * as React from 'react';
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
import { styled } from '@mui/material/styles';
import {green, blue } from '@mui/material/colors';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '@mui/material/Container';
export default function Home()  {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const noteList = useSelector((state) => state.noteList);
  const {  error, notes } = noteList;
  const noteDelete = useSelector((state) => state.noteDelete);
  const{error:errorDelete,success:successDelete}=noteDelete
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const{error:errorUpdate,success:successUpdate}=noteUpdate
  useEffect(() => {
    dispatch(listNotes());
    },[dispatch,successDelete,successUpdate]);
    const deleteHandler = (id) => {
      if (window.confirm("Are you sure?")) {
        dispatch(deleteNoteAction(id));
         navigate("/Home")
      }
    };
 
  return (
 
 notes?.map((note) => (
 
    <Container sx={{maxWidth:'md',width:"50%"}}> 
<Card sx={{ 
     marginTop:"2rem" ,boxShadow:"2px 2px 10px 2px rgb(0 0 0 / 20%)"
     }}>
       <CardContent sx={{textAlign:"center",mR:"30rem"}}>
         <Typography gutterBottom variant="h5" component="div">
        {note.title} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
          {note.content}
         </Typography>
       </CardContent>
    <CardActions >
        <Link style={{ textDecoration: 'none' }} to={`/note/${note._id}`}>
  <Button   sx={{color:"green",underline:"none"}} size="big">Edit</Button>
        </Link>
         <Button onClick={()=>deleteHandler(note._id)}sx={{color:"red",textAlign:"right"}} size="big">Delete</Button>
       </CardActions>
      
     </Card></Container>

  
    
  
  
    ))
    
  );
}
    


