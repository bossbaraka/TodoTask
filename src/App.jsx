import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  Divider
} from "@mui/material";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ActiveProgress from "./components/ActiveProgress";
import { useState } from "react";
import HistoryAside from "./components/HistoryAside";
import TaskFilters from "./components/TaskFilters";

export default function App() {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <TodoProvider>
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 3
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            مهامي
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Top Controls */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Button
              variant="outlined"
              onClick={() => setOpenHistory(true)}
            >
              History
            </Button>

            <TaskFilters />
          </Stack>

          {/* Progress */}
          <ActiveProgress />

          {/* Form */}
          <Box sx={{ mt: 3 }}>
            <TodoForm />
          </Box>

          {/* List */}
          <Box sx={{ mt: 4 }}>
            <TodoList />
          </Box>
        </Paper>

        <HistoryAside
          open={openHistory}
          onClose={() => setOpenHistory(false)}
        />
      </Container>
    </TodoProvider>
  );
}
