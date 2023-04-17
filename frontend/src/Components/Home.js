import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listNotes,deleteNoteAction } from "../Redux/Action/noteAction.js";
import  { useEffect } from "react";
import Container from '@mui/material/Container';
export default function Home()  {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const{error, notes } =useSelector((state) => state.noteList);
  const{error:errorDelete,success:successDelete}=useSelector((state) => state.noteDelete);
  const{error:errorUpdate,success:successUpdate}=useSelector((state) => state.noteUpdate);
  useEffect(() => {
    dispatch(listNotes());
    },[dispatch,successDelete,successUpdate,errorDelete,errorUpdate]);
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
    


