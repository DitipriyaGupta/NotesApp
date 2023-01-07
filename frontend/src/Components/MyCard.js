// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import NavBar from "./NavBar"

// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from "@mui/material/Grid";
// import { useNavigate } from "react-router-dom";
// import { red } from '@mui/material/colors';
// import { useDispatch, useSelector } from "react-redux";
// import { deleteNoteAction, listNotes } from "../Redux/Action/noteAction.js";
// import  { useEffect } from "react";
// export default function MyCard() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const noteList = useSelector((state) => state.noteList);
//   const { loading, error, notes } = noteList;
//   useEffect(() => {
//     dispatch(listNotes());
//     // if (!userInfo) {
//     //   history.push("/");
//     });



//   return (
//     <>
    
   
//     // <Grid item xs={3}>
     
//     <Card  sx={{ maxWidth: 345,
//     marginTop:"2rem"
//     }}>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//        {notes.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//          {notes.content}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button sx={{color:"green"}} onClick={() => navigate("/NewCard")} size="small">Edit</Button>
//         <Button  sx={{color:"red"}} size="small">Delete</Button>
//       </CardActions>
//     </Card>
//     // </Grid>
    
   
   
    
//     </>
   
//   );
// }