import React, { useState, useEffect } from "react";
import Axios from "../../utils/Axios";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { NavLink } from "react-router-dom";

const buttonStyle = {
  // background: Colors.palette.secondary.lightBlue,
  // color: Colors.palette.primary.main,
  height: "40px",
  width: "100%",
  marginTop: "7px",
};

const searcherContainerStyle = {
  background: Colors.palette.primary.main,
  borderRadius: "10px",
  padding: "2px",
};

const Searcher = () => {
  const [servicetype, setservicetype] = useState("");
  const [carType, setCarType] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [carTypes, setCarTypes] = useState([]);

  const handleServiceTypeChange = (event) => {
    setservicetype(event.target.value);
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const fetchData = async () => {
    try {
      const responseService = await Axios.get("/get-all-service");
      if (Array.isArray(responseService.data.srv)) {
        setServiceTypes(responseService.data.srv);
      } else {
        console.error("Error:", responseService.data);
      }

      const responseCarType = await Axios.get("/get-cartype");
      if (Array.isArray(responseCarType.data.c)) {
        setCarTypes(responseCarType.data.c);
      } else {
        console.error("Error:", responseCarType.data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        ...searcherContainerStyle,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                // borderColor: Colors.palette.primary.main,
              },
            }}
          >
            <Select
              value={servicetype}
              onChange={handleServiceTypeChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography>Select Service Type</Typography>
              </MenuItem>
              {serviceTypes.map((type) => (
                <MenuItem key={type._id} value={type._id}>
                  {type.serviceName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                // borderColor: Colors.palette.primary.main,
              },
            }}
          >
            <Select
              value={carType}
              onChange={handleCarTypeChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <Typography>Select Car Type</Typography>
              </MenuItem>
              {carTypes.map((type) => (
                <MenuItem key={type._id} value={type._id}>
                  {type.carName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              to={servicetype && carType ? "/services" : ""}
              style={{
                textDecoration: "none",
                // color: Colors.palette.primary.main,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={buttonStyle}
                disabled={!servicetype || !carType}
              >
                Go for it
              </Button>
            </NavLink>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searcher;
