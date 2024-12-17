import { Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import vector from "../../assests/images/Vector.png";
import vector2 from "../../assests/images/Vector2.png";
import HomeCards from "../Home/HomeCards";
import Nav from "../../partials/Nav";
import AboutUsImg from "../../assests/images/About.png";
import doubleinverted from "../../assests/images/Quote-Above.png";
import car2 from "../../assests/images/AboutCar.png";
import ourVisions from '../../assests/images/ourVisions.png'
import Carimgabout from '../../assests/images/Carimgabout.png'

import Dryclean from "./Dryclean";
import Question from "../Question";
import Footer from "../../partials/Footer";
import { NavLink, useLocation } from "react-router-dom";
import ourmissonImg from '../../assests/images/ourmissonImg.png'
import AppTheme from "../../themes/AppTheme";

const HomePage = () => {
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToFooter = params.get('scrollToFooter');

    if (scrollToFooter === 'true') {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search]);



  return (
    <>

      <Toolbar />
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${AboutUsImg})`,
          backgroundSize: "cover",
          minHeight: "400px",
          backgroundPosition: "center",

        }}
      >

        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            justifyContent="center"
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >

          </Grid>
        </Grid>
      </Box>
      <Box >
        {/* <Container maxWidth={'100%'}> */}
        <Grid container spacing={4} sx={{ marginTop: "3%" }}>

          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant="h4"
              sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
              gutterBottom
            >
              <b> About Us</b>
            </Typography>

            <Typography
              variant="body1"
              sx={{ marginLeft: "5%", lineHeight: "1.8" }}
            >
              We are part of Cleaning Industry having many years of experience in housekeeping services after a deep analyses in routine car cleaning industry ; we feel that your car should be well being like your home with spotless and dirt free.
              We pamper your car with high quality cleaning services through our specific hygine products, equipments, well trained and groomed staff. We assure you to offer the best car cleaning services with a motive to change the face of the car cleaning industry.
              A comprehensive car cleaning offers more than meets the eye, clearing away the dirt and grime that accumulates on cars.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ position: "auto", mt: -8 }} >
            <img
              src={Carimgabout}

              style={{
                width: "100%",
                height: "100%",

              }}
            />
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
      <Dryclean />


      <HomeCards />

      {/* ..................................................................... */}


      <Grid xs={10} container alignItems={'center'} justifyContent={'center'} margin={'auto'}>
        {/* <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            backgroundImage: `url(${vector2})`,
            backgroundSize: "cover",
            height: 250,
            width: 250,
            backgroundPosition: "center",
            margin: 'auto'
          }}
        />
      </Grid> */}

        {/* <Grid item xs={12} md={8} alignItems={"center"}>
          <Grid width={{ xs: 250, sm: 500, md: 700, lg: 800, xl: 800 }} alignItems={"center"} textAlign={'center'} justifyContent={'center'}>
            <Typography
              fontSize={{ xs: 25, sm: 30, md: 32, lg: 35, xl: 35 }}
              color={AppTheme.palette.primary.main}
            >
              <b>Who We Are?</b>
            </Typography>
            <Typography
              fontSize={{ xs: 12, sm: 12, md: 13, lg: 15, xl: 15 }}
              mt={3}
              textAlign={'center'}
            >
              “Our aim is to redefine car care, providing unmatched quality
              and convenience. We strive to
              ensure a seamless, top-tier experience for our customers,
              setting new standards in the industry
              with our innovative approach and customer-centric
              services.”

            </Typography>

            <Typography
              fontSize={{ sm: 12, md: 13, lg: 18 }}
              mt={2}
          
            >

              <svg

                viewBox="0 0 38 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginRight: "2%",
                  width: "40px",
                  height: "40px",

                }}
              >
                <path d="M3.51562 33.1562H12.8906C14.8315 33.1562 16.4062 31.5815 16.4062 29.6406V20.2656C16.4062 18.3247 14.8315 16.75 12.8906 16.75H7.03125V12.0625C7.03125 9.47705 9.1333 7.375 11.7188 7.375H12.3047C13.2788 7.375 14.0625 6.59131 14.0625 5.61719V2.10156C14.0625 1.12744 13.2788 0.34375 12.3047 0.34375H11.7188C5.24414 0.34375 0 5.58789 0 12.0625V29.6406C0 31.5815 1.57471 33.1562 3.51562 33.1562ZM24.6094 33.1562H33.9844C35.9253 33.1562 37.5 31.5815 37.5 29.6406V20.2656C37.5 18.3247 35.9253 16.75 33.9844 16.75H28.125V12.0625C28.125 9.47705 30.2271 7.375 32.8125 7.375H33.3984C34.3726 7.375 35.1562 6.59131 35.1562 5.61719V2.10156C35.1562 1.12744 34.3726 0.34375 33.3984 0.34375H32.8125C26.3379 0.34375 21.0938 5.58789 21.0938 12.0625V29.6406C21.0938 31.5815 22.6685 33.1562 24.6094 33.1562Z" fill={AppTheme.palette.primary.main} />
              </svg>



              "Drive clean, drive happy. We make your journey shine."
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
      <Question />

    </>
  );
};

export default HomePage;
