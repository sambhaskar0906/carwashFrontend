import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import appTheme from '../../themes/AppTheme.js';

function BookingCard({ children, shadowColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    // height: "60%",
    height: '600px',
    borderRadius: "20px",
    backgroundColor: appTheme.palette.common.white,
    gap: "20px",
    border: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "center",
    color: shadowColor,
    boxShadow: isHovered ? "0px 5px 15px" : "none",
    transition: "box-shadow 0.5s, color 0.5s",
  };

  // const gridStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   height: "auto",
  //   overflow: "scroll",
  //   mt: "5%",
  //   transition: "height 0.5s",
  // };

  return (
    // <Grid item sx={gridStyle}>
    <Card
      style={cardStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <CardContent sx={{ overflow: "scroll" }}>
        {children}

      </CardContent>
    </Card>

  );
}

export default BookingCard;
