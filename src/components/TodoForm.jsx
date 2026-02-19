import { useState, useContext } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TodoContext } from "../context/TodoContext";
import MaxActiveDialog from "./MaxActiveDialog";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch, state } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const activeCount = state.todos.filter((t) => !t.completed).length;
    if (activeCount >= state.maxActive) {
      setShowDialog(true);
      return;
    }
    dispatch({
      type: "ADD",
      payload: title,
    });

    setTitle("");
  };

  const [showDialog , setShowDialog]=useState(false)
  const activeCount = state.todos.filter((t) => !t.completed).length;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="أدخل مهمة جديدة"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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

       <MaxActiveDialog open={showDialog} onClose={()=>setShowDialog(false ) } onConfirm={()=>setShowDialog(false)} />
      
      
    </>
  );
}
