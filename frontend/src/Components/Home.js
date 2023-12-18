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
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.noteList);
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

  return notes?.map((note) => (
    <Container sx={{ maxWidth: "md", width: "50%" }}>
      <Card
        sx={{
          marginTop: "2rem",
          boxShadow: "2px 2px 10px 2px rgb(0 0 0 / 20%)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 600 ,color:"rgb(84, 187, 87) "}}
          >
            {note.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note.content}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
          <Link style={{ textDecoration: "none" }} to={`/note/${note._id}`}>
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
  ));
}
