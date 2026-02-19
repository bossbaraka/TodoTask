import { useContext ,useMemo} from "react";
import { Stack } from "@mui/material";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(TodoContext);

  
const filteredTodos = useMemo(() => {
  return state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });
}, [state.todos, state.filter]);

  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </Stack>
  );
}
