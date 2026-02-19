import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ActiveProgress from "./components/ActiveProgress";
import HistoryAside from "./components/HistoryAside";
import TaskFilters from "./components/TaskFilters";
import { useState } from "react";

export default function App() {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <TodoProvider>
      <Container
        maxWidth="sm"
        sx={{
          mt: 6,
          mb: 6,
          borderRadius: "40px",
          background:
            "linear-gradient(to right, #000000, #000000)", // خلفية مريحة للعين
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Paper
          elevation={12}
          sx={{
            p: 5,
            borderRadius: 4,
            background: "#fffeafe0", // شبه شفاف لإضافة العمق
            boxShadow:
              "0px 10px 30px rgba(0,0,0,0.15), 0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="700"
            sx={{
              color: "#333",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            مهامي
          </Typography>

          <Divider sx={{ mb: 4, borderColor: "#e0e0e0" }} />

          {/* Top Controls */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4, gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: "600",
                borderRadius: 3,
                textTransform: "none",
                background:
                  "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
              onClick={() => setOpenHistory(true)}
            >
              History
            </Button>

            <TaskFilters />
          </Stack>

          {/* Progress */}
          <ActiveProgress />

          {/* Form */}
          <Box sx={{ mt: 4 }}>
            <TodoForm />
          </Box>

          {/* List */}
          <Box sx={{ mt: 5 }}>
            <TodoList />
          </Box>
        </Paper>

        <HistoryAside open={openHistory} onClose={() => setOpenHistory(false)} />
      </Container>
    </TodoProvider>
  );
}
