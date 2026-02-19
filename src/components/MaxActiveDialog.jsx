import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

export default function MaxActiveDialog({open , onClose , onConfirm}) {
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
        لقد تجاوزت الحد الاقصى من المهام الغير منجزة 
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
       حاول ان تقوم بانجاز المهام حتى يتم السماح لك باضافة المزيد
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
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