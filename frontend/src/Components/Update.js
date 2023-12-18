import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateNoteAction } from "../Redux/Action/noteAction";
import axios from "axios";
import { useParams } from "react-router";
import { Alert } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

export default function Update() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[error,setError]=useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { serverError } = useSelector((state) => state.noteUpdate);

  const { id } = useParams();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const fetching = async () => {
      // const baseUrl = "http://localhost:5000";
      const { data } = await axios.get( `/api/notes/${id}`, config);
      setTitle(data.title);
      setContent(data.content);
    };
    fetching();
  }, [id, userInfo.token, serverError]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(title!=="" && content!==""){
       dispatch(updateNoteAction(id, title, content));
    navigate("/Home");
    }
    else{
      setError("Please fill all the fields");
    }
   
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
    typography: {
      fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
      {error ? <Alert severity="error">{error}</Alert> : ""}
        <Grid
          item
          xs={10}
          sm={10}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ boxShadow: "0" }}
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={submitHandler}
              sx={{ mt: 1 }}
            >
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

              <TextField
                sx={{ mt: 2 }}
                fullWidth
                label="Write your note here...."
                multiline
                rows={8}
                rowsMax={9}
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <Button
                onClick={submitHandler}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    </>
  );
}
