import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import car1 from "../assests/images/AboutCar.png";
import { NavLink } from "react-router-dom";

const AboutGuest = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            variant="h4"
            sx={{ marginLeft: "5%", color: 'primary.main' }}
            gutterBottom
          >
            <b> About Us</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginLeft: "5%", lineHeight: "1.8", width: '80%' }}
          >
            We are part of Cleaning Industry having many years of experience in housekeeping services after a deep analyses in routine car cleaning industry ; we feel that your car should be well being like your home with spotless and dirt free.
            We pamper your car with high quality cleaning services through our specific hygine products, equipments, well trained and groomed staff.
            <NavLink
              to="/aboutus"
              style={{
                textDecoration: "none",
              }}
            >
              (see more)
            </NavLink>

          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
          <img
            src={car1}
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: { xs: "0%", sm: "10%" },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutGuest;
