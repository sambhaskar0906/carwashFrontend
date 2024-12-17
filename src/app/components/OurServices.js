import React, { useEffect, useState } from "react";
import { Grid, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container, Card, Box, Divider, Button } from "@mui/material";
import red from "../assests/images/red1.png";
import yellow from "../assests/images/yellow1.png";
import blue from "../assests/images/blue1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCarName } from "../store/slices/AuthSlice";
import AppTheme from "../themes/AppTheme";
import { Scale } from "chart.js";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const imageStyles = {
  width: "70%",
  height: "auto",
  // display: "flex",
  transition: "transform 0.3s ease-in-out",
};

const cardStyles = {
  textAlign: "center",
  boxShadow: "none",
  transition: "transform 0.3s ease-in-out",
};

const OurServices = () => {
  const { palette: { primary, secondary, info, common } } = useTheme()

  const dispatch = useDispatch()
  const [car, setCar] = useState(null)
  const [clean, setClean] = useState(null)
  const [showButtons, setShowButtons] = useState(false);
  const [showdeepClean, setshowdeepClean] = useState(false);
  const [showroutineClean, setshowroutineClean] = useState(false);
  const [active, setActive] = useState(false)
  const [cardStyle, setCarStyle] = useState(null);






  // const handleImageHover = (event) => {
  //   const card = event.currentTarget;
  //   const serviceText = card.querySelector(".service-text");
  //   card.style.transform = "scale(1.1)";
  //   serviceText.style.backgroundColor = primary.main;
  //   serviceText.style.color = "white";
  // };

  // const handleImageLeave = (event) => {
  //   const card = event.currentTarget;
  //   const serviceText = card.querySelector(".service-text");
  //   card.style.transform = "scale(1)";
  //   serviceText.style.backgroundColor = "transparent";
  //   serviceText.style.color = primary.main;

  // };

  // const handleImageLeaveCarStyle = (event) => {
  //   const card = event.currentTarget
  //   const serviceText = card.querySelector(".service-text");
  //   card.style.transform = "scale(1)";
  //   serviceText.style.backgroundColor = primary.main;
  //   serviceText.style.color = common.white;

  // };




  const CatchCarName = (data, event) => {

    setCar(data);
  };



  useEffect(() => {
    dispatch(getCarName([car, clean]))
  }, [car, clean])





  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  const handleDeepclean = () => {
    setshowdeepClean(true)
    setActive(true)
    setClean("Deep Cleaning")
  }

  const handleRoutineclean = () => {
    setshowroutineClean(true)
    setActive(false)
    setClean("Routine Cleaning")
  }


  const cardStyleonclick = {
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "8%",
    background: AppTheme.palette.primary.main,
    color: common.white,
    transform: "scale(1.2)",
    transition: "transform 0.5s ease"
  }
  const cardStyleonrandom = {
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "8%",
    color: AppTheme.palette.primary.main
  }

  return (
    <Container sx={{ marginTop: "3%" }}>


      <Box
        // onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "3%",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)"
          }
        }}
      >
        <Typography variant="h4" sx={{ color: primary.main, fontWeight: "600" }}>
          Our Services&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;•
        </Typography>
        <Divider
          sx={{
            backgroundColor: primary.main,
            height: "2px",
            flex: 1,
            marginLeft: "2%",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        />

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5%",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <NavLink
            to="/services"
            style={{
              textDecoration: "none",
              color: primary.main,
            }}
          >
            See all <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
          </NavLink>
        </Typography>


      </Box>




      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} style={{ transition: "opacity 0.5s", opacity: 1 }}>
        <Box>
          <Button variant="outlined" onClick={handleDeepclean} sx={active && { background: AppTheme.palette.primary.dark, color: AppTheme.palette.common.white, '&:hover': { background: AppTheme.palette.primary.light, color: AppTheme.palette.common.white } }}>
            Deepcleaning
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleRoutineclean} sx={!active && { background: AppTheme.palette.primary.dark, color: AppTheme.palette.common.white, '&:hover': { background: AppTheme.palette.primary.light, color: AppTheme.palette.common.white } }}>
            Routine Cleaning
          </Button>
        </Box>
      </Stack>





      {(showdeepClean || showroutineClean) && (

        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} sm={4} >
            <Card
              sx={{
                background: '#fff', ...cardStyles,
                textDecoration: "none",
                cursor: "pointer"
              }}
              onClick={(e) => CatchCarName("Hatchback")}
            // onMouseEnter={handleImageHover}

            >
              <Typography
                className="service-text"
                variant="h5"
                sx={car == "Hatchback" ? cardStyleonclick : cardStyleonrandom}
              >
                Hatch Back

              </Typography>
              <img src={red} alt="Hatchback" style={imageStyles} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card
              sx={{
                background: '#fff', ...cardStyles,
                textDecoration: "none",
                cursor: "pointer"
              }}
              onClick={(e) => CatchCarName("MUV/ Seddan")}
            // onMouseEnter={handleImageHover}
            >
              <Typography
                variant="h5"
                sx={car == "MUV/ Seddan" ? cardStyleonclick : cardStyleonrandom}

              >
                Sedan
              </Typography>
              <img src={yellow} alt="yellow" style={imageStyles} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card
              sx={{
                background: '#fff', ...cardStyles,
                textDecoration: "none",
                cursor: "pointer"
              }}
              onClick={(e) => CatchCarName("XUV/ LUX")}
            // onMouseEnter={handleImageHover}

            >
              <Typography
                variant="h5"
                sx={car == "XUV/ LUX" ? cardStyleonclick : cardStyleonrandom}

              >
                SUV
              </Typography>
              <img src={blue} alt="SUV" style={imageStyles} />
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default OurServices;
