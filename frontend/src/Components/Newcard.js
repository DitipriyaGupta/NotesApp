import * as React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import NavBar from "./NavBar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import { createNoteAction } from "../Redux/Action/noteAction";
import { Alert } from '@mui/material';
export default function Newcard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const dispatch = useDispatch();
const navigate=useNavigate();
  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  
  const submitHandler = (e) => {
    e.preventDefault();
  
    dispatch(createNoteAction(title, content));
    navigate("/Home");
  };

  useEffect(() => {}, []);


  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
  return (

      
        
     <> 
     
         <ThemeProvider theme={theme}>
         {error ? <Alert severity="error">{error}</Alert>:""}
        <Typography variant="h3"
      align="center">
    </Typography><br /><TextField
        sx={{
          height: 100,width: 700,ml:50,mt:5}}
        label="Title"
        color="primary"
       
        onChange={(e) => setTitle(e.target.value)}
         />
         <br />
        <TextField
        sx={{
          width: 700,
          ml:50
        }}
        label="Write your Note here....."
        multiline
        rows={10}
        rowsMax={9}
        variant="outlined"
      value={content}
        onChange={(e) => setContent(e.target.value)}
        /><br /><Button onClick={submitHandler}
          sx={{
            background: "rgb(84, 187, 87)",
            color: "white",
            padding: "1rem 3rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            fontWeight:"600",mt:"2rem",marginLeft:"42rem"
          }}>
        Save
      </Button>
      {/* <Button className="mx-2"  variant="danger">
            Update
            </Button> */}
      </ThemeProvider>
     </>
  );
}

// export default NewNote;
