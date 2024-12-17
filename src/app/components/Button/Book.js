import React from "react";
import Button from "@mui/material/Button";
// import { Book } from "@mui/icons-material";

const buttonStyle = {
  width: "180.08px",
  height: "58px",
  borderRadius: "20px",
  gap: "10px",
  display: "flex",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
};

const Book = () => {
  return (
    <Button variant="contained" style={buttonStyle}>
      Button
    </Button>
  );
};

export default Book;
