import { Box, Grid, Typography } from "@mui/material";
import AppTheme from "../themes/AppTheme";
import React from "react";
const Ourplans = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <Grid ml={4}>
          <Typography
            variant="h4"
            mt={5}
            mb={2}
            sx={{ color: AppTheme.palette.primary.main }}
          >
            <b> Our Plan</b>
          </Typography>
          <Typography fontSize="16.5px" sx={{ lineHeight: "1.8" }}>
            Explore Our Car Wash Options and Subscriptions : <br />
            Routine, Dry, and Deep Clean. Sign up for our hassle-free
            subscription plans to enjoy regular, convenient, and budget-friendly
            cleaning for your vehicle in India.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Ourplans;
