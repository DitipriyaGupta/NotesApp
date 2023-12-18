import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createNoteAction } from "../Redux/Action/noteAction";
import { Alert } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

export default function Newcard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteCreate = useSelector((state) => state.noteCreate);
  const { serverError} = noteCreate;

  const submitHandler = (e) => {
    e.preventDefault();
if(title!=="" && content!==""){
    dispatch(createNoteAction(title, content));
    navigate("/Home");}
    else {
      setError("Please fill all the fields");
    }
  };

  useEffect(() => {}, []);

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
