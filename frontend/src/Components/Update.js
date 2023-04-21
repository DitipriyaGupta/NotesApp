import * as React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
import { updateNoteAction} from "../Redux/Action/noteAction";
import axios from "axios";
import { useParams } from "react-router";

export default function Update() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
const navigate=useNavigate();

const userLogin = useSelector((state) => state.userLogin); 
const { userInfo} = userLogin;
const {error} = useSelector((state) => state.noteUpdate);
 
const {id} = useParams() ;
  useEffect(() => {
const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`,config);
      setTitle(data.title);
      setContent(data.content);
    };
    fetching();
  }, [id,userInfo.token,error]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(id,title,content));
    navigate("/Home");
    
  }; 

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
      <Grid item  xs={10} sm={10} md={5} component={Paper} elevation={6} square sx={{boxShadow:"0",mr:4}}>
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          > 
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
            <TextField
         margin="normal"
                  name="Title"
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  value={title}
                  autoFocus
        color="primary"
       
        onChange={(e) => setTitle(e.target.value)}
         />
           
               <TextField sx={{mt:2}}
        fullWidth
        label="Write your note here...."
        multiline
        rows={8}
        rowsMax={9}
        variant="outlined"
      value={content}
        onChange={(e) => setContent(e.target.value)}
        />
             
             
              <Button onClick={submitHandler}
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2 ,color:"white"}}
              
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* <Typography variant="h3"
      align="center">
    </Typography><br /><TextField
        sx={{
          height: 100,width: 700,ml:50,mt:5}}
        label="Title"
        color="primary"
        value={title}
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
      </Button> */}
      </ThemeProvider>
     </>
  );
}
