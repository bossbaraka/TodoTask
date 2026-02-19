import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@mui/material";

export default function EditTaskDialog({
  open,
  task,
  onClose,
  onSave
}) {
  const [value, setValue] = useState("");

  // عند فتح الديالوق نضع القيمة الحالية
  useEffect(() => {
    if (task) {
      setValue(task.title);
    }
  }, [task]);

  const handleSave = () => {
    if (!value.trim()) return;
    onSave(value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>تعديل المهمة</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          autoFocus
          margin="dense"
          label="عنوان المهمة"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>إلغاء</Button>
        <Button
          onClick={handleSave}
          variant="contained"
        >
          حفظ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
