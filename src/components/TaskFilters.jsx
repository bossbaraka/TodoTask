import { useContext, useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  IconButton,
 
} from "@mui/material";
import { TodoContext } from "../context/TodoContext";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveAllDialog from "./RemoveAllDialog";

export default function TaskFilters() {
  const { state, dispatch } = useContext(TodoContext);

  const [showRemoveAllDialog, setShowRemoveAllDialog] = useState(false);
  const handleChange = (event, newFilter) => {
    if (newFilter !== null) {
      dispatch({
        type: "SET_FILTER",
        payload: newFilter,
      });
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2 }}
      >
        <ToggleButtonGroup
          value={state.filter}
          exclusive
          onChange={handleChange}
          sx={{
            direction: "rtl",
            "& .MuiToggleButton-root": {
              border: "none",
              borderBottom: "2px solid #ccc",
              borderRadius: 0,
              px: 3,
              fontWeight: 600,
              color: "#555",
              "&.Mui-selected": {
                backgroundColor: "transparent",
                "&:nth-of-type(1)": {
                  color: "blue",
                  borderBottom: "3px solid blue",
                }, // الكل
                "&:nth-of-type(2)": {
                  color: "green",
                  borderBottom: "3px solid green",
                }, // المنجزة
                "&:nth-of-type(3)": {
                  color: "red",
                  borderBottom: "3px solid red",
                }, // غير المنجزة
              },
              "&:hover": { backgroundColor: "transparent" },
            },
          }}
        >
          <ToggleButton value="all">الكل</ToggleButton>
          <ToggleButton value="completed">المنجزة</ToggleButton>
          <ToggleButton value="active">غير المنجزة</ToggleButton>
          <IconButton
            onClick={() => setShowRemoveAllDialog(true)}
            sx={{ color: "#b80000" }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ToggleButtonGroup>
      </Box>

      <RemoveAllDialog
        open={showRemoveAllDialog}
        onClose={() => setShowRemoveAllDialog(false)}
        onConfirm={() => {
          dispatch({ type: "removeAll" });
          setShowRemoveAllDialog(false);
        }}
      />
    </>
  );
}
