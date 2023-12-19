import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listNotes, deleteNoteAction } from "../Redux/Action/noteAction.js";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const { notes = [] } = useSelector((state) => state.noteList);
  const { error: errorDelete, success: successDelete } = useSelector(
    (state) => state.noteDelete
  );
  const { error: errorUpdate, success: successUpdate } = useSelector(
    (state) => state.noteUpdate
  );
  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch, successDelete, successUpdate, errorDelete, errorUpdate]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
      navigate("/Home");
    }
  };
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <>
      {notes.length === 0 ? (
        <>
          {isMobile ? (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                maxWidth: "sm",
                textAlign: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/9771/9771890.png"
                style={{ width: "250px" }}
              />
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                No note found
              </Typography>
            </Container>
          ) : (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                maxWidth: "sm",
                textAlign: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/9771/9771890.png"
                style={{ width: "150px" }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                No note found
              </Typography>
            </Container>
          )}
        </>
      ) : (
        notes?.map((note) => (
          <Container
            sx={{
              maxWidth: "lg",
              width: "50%",
              [theme.breakpoints.down("md")]: {
                width: "70%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "70%",
              },
              [theme.breakpoints.down("xs")]: {
                width: "100%",
              },
            }}
          >
            <Card
              sx={{
                margin: "2rem auto",
                boxShadow: "2px 2px 10px 2px rgb(0 0 0 / 20%)",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    wordWrap: "break-word",
                    fontWeight: 600,
                    color: "rgb(84, 187, 87) ",
                  }}
                >
                  {note.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ wordWrap: "break-word" }}
                >
                  {note.content}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/note/${note._id}`}
                >
                  <BootstrapTooltip title="Edit">
                    <Button sx={{ color: "green", underline: "none" }}>
                      <EditIcon sx={{ fontSize: 30 }} />
                    </Button>
                  </BootstrapTooltip>
                </Link>
                <BootstrapTooltip title="Delete">
                  <Button
                    onClick={() => deleteHandler(note._id)}
                    sx={{ color: "#c62828", mR: "80px" }}
                  >
                    <DeleteIcon sx={{ fontSize: 30 }} />
                  </Button>
                </BootstrapTooltip>
              </CardActions>
            </Card>
          </Container>
        ))
      )}
    </>
  );
}
