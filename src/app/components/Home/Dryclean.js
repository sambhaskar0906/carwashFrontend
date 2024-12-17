import { Box, Container, Grid, Typography, Button, useTheme, Stack } from "@mui/material";
import React from "react";
import wolks from "../../assests/images/wolks.png";
import ourmissonImg from '../../assests/images/ourmissonImg.png'
import ourVisions from '../../assests/images/ourVisions.png'
import { NavLink } from "react-router-dom";
import vector from '../../assests/images/Vector.png'
import AppTheme from "../../themes/AppTheme";

const Dryclean = () => {
  const { palette: { primary, secondary, info, common } } = useTheme()
  return (
    <>

      <Grid container xs={12} alignItems="center" justifyContent={"center"}>
        <Grid container xs={12} sx={{ height: { xs: "auto", md: '400px' } }} spacing={3} justifyContent={'center'} mt={5}>
          <Grid item xs={12} sm={12} md={6} >

            <Typography
              variant="h6"
              fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
              sx={{ color: AppTheme.palette.primary.main }}
            >
              <b sx={{ color: AppTheme.palette.primary.main }}>Our Mission</b>
            </Typography>
            <Typography
              fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
              sx={{
                //  color: Colors.palette.secondary.grey,
                lineHeight: "1.8"
              }}
            >
              At our car wash service, we are dedicated to exceeding customer expectations by delivering
              an unparalleled and convenient cleaning experience. Our mission is to provide top-notch,
              eco-friendly car washing solutions that not only enhance the aesthetic appeal of vehicles
              but also contribute to environmental sustainability. We strive to redefine the car care
              industry through innovation, efficiency, and a commitment to customer satisfaction. With
              a focus on quality and professionalism, we aim to be the go-to choice for individuals
              seeking a reliable and transformative car cleaning service.

            </Typography>

          </Grid>
          <Grid item xs={12} sm={12} md={5} alignItems="center" justifyContent={"center"} height={'100%'}>
            <Box
              component="img"
              src={ourmissonImg}
              alt="Car"
              width="100%"
              height="100%"
            />
          </Grid>

        </Grid>


        {/* //================================================================================================== */}


        <Grid container xs={12} sx={{ height: { xs: "auto", md: '400px' } }} spacing={3} justifyContent={'center'} mt={5}>
          <Grid item xs={12} sm={12} md={6} >

            <Typography
              variant="h6"
              fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
              sx={{ color: AppTheme.palette.primary.main }}
            >
              <b sx={{ color: AppTheme.palette.primary.main }}>Our Vision</b>
            </Typography>
            <Typography
              fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
              sx={{
                lineHeight: "1.8"
              }}
            >
              Envisioning a future where every vehicle shines, our vision is to be
              the forefront of the car wash industry, setting new standards of excellence.
              We aspire to create a network of environmentally responsible car care centers
              that prioritize water conservation and eco-friendly practices. Our goal is to
              revolutionize the way people perceive car washing, making it an effortless and
              enjoyable experience. By embracing cutting-edge technology and sustainable methodologies,
              we aim to be a driving force towards a cleaner, greener, and more vibrant automotive landscape.

            </Typography>

          </Grid>
          <Grid item xs={12} sm={12} md={5} alignItems="center" justifyContent={"center"} height={'100%'}>
            <Box
              component="img"
              src={ourVisions}
              alt="Car"
              width="100%"
              height="100%"
            />
          </Grid>

        </Grid>


        {/* <Grid container xs={12} sx={{ height: { xs: "auto", md: '400px' } }} spacing={3} justifyContent={'center'} mt={5}>
          <Grid item xs={12} sm={12} md={6} >

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 25, sm: 30, md: 35, lg: 37, xl: 37 },
                  color: AppTheme.palette.primary.main,
                }}
              >
                <b>Professional Washing And Cleaning.</b>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 12, md: 13, lg: 15, xl: 15 },
                  // color: Colors.palette.secondary.grey,
                  lineHeight: "1.8",
                }}
                mt={3}
              >
                For professional cleaning services or inquiries, get in touch
                with <br />
                us at our Noida center. Our dedicated team is ready to assist
                you.
                <br />
                <br /> Contact us via phone or email to schedule your car's
                pampering
                <br /> session or to learn more about our specialized cleaning
                services. <br />
                Your satisfaction is our priority.
              </Typography>
              <Stack direction={'row'} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'primary.main',
                    // color: Colors.palette.primary.main,
                    height: 45,
                    width: {
                      xl: "170px",
                      lg: "170px",
                      md: "170px",
                      sm: "170px",
                      xs: "170px",
                    },
                    mt: 5,
                  }}
                >
                  +91 7017866149
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    border: `1.5px solid ${primary.main}`,

                    backgroundColor: 'primary.main',
                    height: 45,
                    width: {
                      xl: "170px",
                      lg: "170px",
                      md: "170px",
                      sm: "170px",
                      xs: "170px",
                    },
                    mt: 5,
                    ml: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                    "&:hover": {
                      backgroundColor: 'primary.main.dark',

                    },
                  }}
                >

                  <NavLink
                    to="/services"
                    style={{
                      textDecoration: "none",
                      color: '#fff'
                    }}
                  >
                    Our Services
                  </NavLink>
                </Button>
              </Stack>
            </Box>

          </Grid>
          <Grid item xs={12} sm={12} md={5} alignItems="center" justifyContent={"center"} height={'100%'}>
            <Box
              component="img"
              src={vector}
              alt="Car"
              width="100%"
              height="100%"
            />
          </Grid>

        </Grid> */}








        {/* ------------------------------------------------------------------------------------------------------ */}

        <Grid container xs={12} sx={{ height: { xs: "auto", md: '400px' } }} spacing={3} justifyContent={'center'} mt={5}>
          <Grid item xs={12} sm={12} md={6} >

            <Typography
              variant="h6"
              fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
              sx={{ color: AppTheme.palette.primary.main }}
            >
              <b sx={{ color: AppTheme.palette.primary.main }}>Dry Cleaning Any Dirt <br />Inside The Car.</b>
            </Typography>
            <Typography
              fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
              sx={{
                //  color: Colors.palette.secondary.grey,
                lineHeight: "1.8"
              }}
            >
              Our dry and dirt cleaning process employs state-of-the-art{" "}
              technology and eco-friendly solutions to gently remove grime and{" "}
              restore your vehicle's pristine shine.
              Using advanced techniques, we eliminate dirt effectively while
              preserving your car's finish, ensuring a thorough cleanwithout
              compromising its integrity. Experience superior care with ourdry
              and dirt cleaning service.

            </Typography>

          </Grid>
          <Grid item xs={12} sm={12} md={5} alignItems="center" justifyContent={"center"} height={'100%'}>
            <Box
              component="img"
              src={wolks}
              alt="Car"
              width="100%"
              height="100%"
            />
          </Grid>

        </Grid>





        {/* 
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Typography
              variant="h6"
              fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
              sx={{ color: AppTheme.palette.primary.main }}
            >
              <b sx={{ color: AppTheme.palette.primary.main }}>Dry Cleaning Any Dirt <br />Inside The Car.</b>
            </Typography>
            <Typography
              fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
              mt={3}
              sx={{
                // color: Colors.palette.secondary.grey,
                lineHeight: "1.8"
              }}
            >
              Our dry and dirt cleaning process employs state-of-the-art{" "}
              <br />
              technology and eco-friendly solutions to gently remove grime and{" "}
              <br />
              restore your vehicle's pristine shine.
              <br />
              <br /> Using advanced techniques, we eliminate dirt effectively
              while
              <br /> preserving your car's finish, ensuring a thorough clean
              without <br />
              compromising its integrity. Experience superior care with our
              dry
              <br /> and dirt cleaning service.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            component="img"
            src={wolks}
            alt="Car"
            width="100%"
            height="auto"
          />
        </Grid>
 */}


      </Grid>

    </>
  );
};

export default Dryclean;
