import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box
} from "@mui/material";

export default function HistoryAside({ open, onClose }) {
  const { state } = useContext(TodoContext);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 320, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          History
        </Typography>

        <List>
          {state.history.map((h, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={h.title || "Task"}
                secondary={`${h.action} • ${new Date(h.time).toLocaleTimeString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
