import { useContext } from "react";
import {
  LinearProgress,
  Box,
  Typography
} from "@mui/material";
import { TodoContext } from "../context/TodoContext";

export default function ActiveProgress() {

  const { state } = useContext(TodoContext);
  

  const activeCount = state.todos.filter(
    (t) => !t.completed
  ).length;

  const ratio = activeCount / state.maxActive;
  const progress =
    (activeCount / state.maxActive) * 100;

  return (
    <Box sx={{ my: 3 ,direction:"rtl"}} >
      <Typography>
       المهام الغير منجزة  : {activeCount} / {state.maxActive}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
    backgroundColor:
      ratio > 0.8
        ? "success.main"
        : ratio > 0.5
        ? "error.main"
        : "success.main"
  }}
      />
    </Box>
  );
}
