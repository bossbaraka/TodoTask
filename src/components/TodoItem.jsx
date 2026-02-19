import { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
// dailog import
import ConfirmDialog from "./ConfirmDialog";
import EditTaskDialog from "./EditTaskDialog";
// icon buttons
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleSave = () => {
    if (!newTitle.trim()) return;

    dispatch({
      type: "UPDATE",
      payload: {
        id: todo.id,
        title: newTitle,
      },
    });
    setIsEditing(false);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#2E2E8B",
          color: "white",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row">
            <IconButton
              onClick={() => setOpenDialog(true)}
              sx={{ color: "red" }}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              onClick={() =>
                dispatch({
                  type: "TOGGLE",
                  payload: todo.id,
                })
              }
              sx={{
                color: todo.completed ? "green" : "white",
              }}
            >
              <CheckCircleIcon />
            </IconButton>

            {isEditing ? (
              <IconButton onClick={handleSave} sx={{ color: "#4caf50" }}>
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => setOpenEditDialog(true)}
                sx={{ color: "#4dabf7" }}
              >
                <EditIcon />
              </IconButton>
            )}
          </Stack>

          {isEditing ? (
            <TextField
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              size="small"
            />
          ) : (
            <Typography
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Typography>
          )}
        </CardContent>
      </Card>
      {/*  dialog  */}
      {/*deleted dialog  */}
      <ConfirmDialog
        open={openDialog}
        title="حذف المهمة"
        description="هل أنت متأكد أنك تريد حذف هذه المهمة؟ لا يمكن التراجع عن هذا الإجراء."
        onClose={() => setOpenDialog(false)}
        onConfirm={() => {
          dispatch({
            type: "DELETE",
            payload: todo.id,
          });
          setOpenDialog(false);
        }}
      />
      <EditTaskDialog
        open={openEditDialog}
        task={todo}
        onClose={() => setOpenEditDialog(false)}
        onSave={(newTitle) => {
          dispatch({
            type: "UPDATE",
            payload: {
              id: todo.id,
              title: newTitle,
            },
          });
          setOpenEditDialog(false);
        }}
      />
    </>
  );
}
