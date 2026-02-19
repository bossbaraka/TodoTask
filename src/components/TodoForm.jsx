import { useState, useContext } from "react";
import {
  TextField,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TodoContext } from "../context/TodoContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD",
      payload: title,
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          label="أدخل مهمة جديدة"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
        >
          إضافة
        </Button>
      </Stack>
    </form>
  );
}
