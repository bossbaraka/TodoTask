import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

export default function RemoveAllDialog({
  open,
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
      حذف جميع المهام 
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          عند النقر على نعم سيتم حذف جميع المهام دفعة واحده
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
