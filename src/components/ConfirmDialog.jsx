import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

export default function ConfirmDialog({
  open,
  title,
  description,
  onClose,
  onConfirm
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="confirm-dialog-title">
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          إلغاء
        </Button>

        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
        >
          تأكيد
        </Button>
      </DialogActions>
    </Dialog>
  );
}
