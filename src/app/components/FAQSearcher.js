import React from "react";
import {
  Container,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Grid,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { blue } from "@mui/material/colors";
// import Colors from "../utils/colors";

function FAQ1() {
  const handleSearch = () => {
    console.log("Search button clicked");
  };

  return (
    <Container>
      <Grid
        container
        // spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "200px",
          // color: Colors.palette.secondary.main
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              //  color: Colors.palette.secondary.main,
              marginBottom: "20px"
            }}
          >
            Search Questions
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <TelegramIcon
                    // sx={{ color: Colors.palette.secondary.main }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FAQ1;
