import React from "react";
import BackgroundImg from "../components/Background";
import Nav from "../partials/Nav";
// import Question from "../../components/Question";
import Footer from "../partials/Footer";
// import Card from "../../components/Card";
// import AboutGuest from "../../components/About";
// import Review from "../../components/Review";
// import Work from "../../components/Work";
import Background from "../components/Background"
import { Box, Container, Grid, Typography, Button, Toolbar } from "@mui/material";
import AboutUsImg from "../assests/images/About.png";
import Whyusimage from '../assests/images/Whyusimage.png'
import comprehensFirst from '../assests/images/comprehensiveServices_firstImage.png'
import comprehensSeconed from '../assests/images/comprehensiveServices_secImage.png'
import comprehensThird from '../assests/images/comprehensiveServices_thirdImage.png'
import { Fullscreen } from "@mui/icons-material";

import wolks from "../assests/images/wolks.png";
import ourmissonImg from '../assests/images/ourmissonImg.png'
import ourVisions from '../assests/images/ourVisions.png'
import { NavLink } from "react-router-dom";
import vector from '../assests/images/Vector.png'
import AppTheme from "../themes/AppTheme";






function Whyus() {


    return (
        <>
            <Toolbar />
            <Box
                sx={{
                    display: "flex",
                    backgroundImage: `url(${Whyusimage})`,
                    backgroundSize: "cover",
                    minHeight: "400px",
                    backgroundPosition: "center",
                    // position: "relative",
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
                            top: "20%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                        }}
                    >
                        <Container>
                            <Typography

                                variant="h3"
                                sx={{ fontWeight: 600, color: '#fff' }}
                            >
                                Why Us
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>

            <Grid item xs={12} sm={6} md={8} marginTop={'30px'}>
                <Typography
                    variant="h5"
                    sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
                    gutterBottom
                >
                    <b>Why Us ?</b>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        marginLeft: "5%",
                        lineHeight: "1.5",
                        width: { xs: '90%', md: 'auto' }
                    }}
                >
                    We have experienced management team who have deep knowledge of product, equipment & process of car cleaning Industry.
                    <br />

                    Verified and trained Staff who are part of the car cleaning industry for many years now.
                    <br />
                    We have the latest technologies and some of the best industry-grade equipment and specific material that will take care of your car in the first place effectively.
                    <br />
                    We use antifungal and sanitization process to keep you & your beloved one away from germs and infections.
                    <br />
                    We use a systematic approach that is designed to offer you the best possible car cleaning services.

                    <ul>
                        <li>The Interaction Phase is the initial stage of our process, in which we connect with the customer and learn about the details, past detailed history, <br /> and so on. It enables us to identify any specific problem or issue.</li>
                        <li>The inspection procedure is the second stage, does a thorough physical check of the vehicle to assess its defects and problems.</li>
                        <li>The preparation procedure will be the third stage, and we will choose our technique for that specific cleaning.</li>

                    </ul>

                </Typography>
            </Grid>

            <Grid container sx={{




            }}>

                <Grid container xs={12} sm={6} md={10} sx={{ marginTop: '30px' }}>
                    <Grid item xs={12} sm={10} md={12} >
                        <Typography
                            variant="h5"
                            sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
                            gutterBottom
                        >
                            <b>Comprehensive Services</b>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ marginLeft: "5%", lineHeight: "1.8" }}
                        >
                            Choose us for a versatile car cleaning experience tailored to your needs.
                            From quick and efficient routine cleans to specialized dry and deep cleans,
                            we offer a diverse range of services to keep your vehicle in pristine condition.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"center"} sx={{ gap: "20px", marginTop: '30px' }}>
                    <Grid xs={10} sm={8} md={3} sx={{
                        height: '250px',

                        '&:hover': {
                            backgroundColor: 'black',
                            opacity: '20%',
                            transition: 'background-color 0.3s ease-out',

                        },



                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensFirst} />
                    </Grid >
                    <Grid xs={10} sm={8} md={3} sx={{
                        height: '250px',

                        '&:hover': {
                            backgroundColor: 'black',
                            opacity: '20%',
                            transition: 'background-color 0.3s ease-out',

                        },



                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensSeconed} />
                    </Grid>
                    <Grid xs={10} sm={8} md={3} sx={{
                        height: '250px',

                        '&:hover': {
                            backgroundColor: 'black',
                            opacity: '20%',
                            transition: 'background-color 0.3s ease-out',

                        },



                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid xs={11} container sx={{ mt: 10 }} justifyContent={'center'} alignItems={'center'} alignContent={'center'} margin={'auto'}>
                <Grid container item spacing={1} justifyContent={'center'} alignItems={'center'} alignContent={'center'} >
                    <Grid item xs={12} sm={12} md={5} alignItems={'center'} justifyContent={'center'}>

                        <Typography
                            variant="h6"
                            fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
                            sx={{ color: AppTheme.palette.primary.main }}
                        >
                            <b sx={{ color: AppTheme.palette.primary.main }}>Quality Assurance:</b>


                        </Typography>
                        <Typography
                            variant="h6"
                            fontSize={{ xs: 10, sm: 10, md: 20, lg: 22, xl: 22 }}
                            sx={{ color: AppTheme.palette.primary.main }}
                        >
                            <b sx={{ color: AppTheme.palette.primary.main }}>Unparalleled Expertise</b>


                        </Typography>
                        <Typography
                            fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
                            mt={3}
                            sx={{
                                //  color: Colors.palette.secondary.grey,
                                lineHeight: "1.5", width: { xs: '350px', md: '450px' }
                            }}
                        >
                            At WowKaar, we prioritize quality in every aspect of our
                            operations. Our team consists of skilled professionals with
                            extensive experience in car care. From using premium cleaning
                            products to employing industry-best practices, we ensure that y
                            our vehicle receives the highest standard of service. We are
                            committed to surpassing your expectations and leaving your car
                            with a flawless finish that reflects our dedication to excellence.

                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            src={ourmissonImg}
                            alt="Car"
                            width="100%"
                            height="300px"
                        />
                    </Grid>




                    <Grid item xs={12} sm={12} md={5}>
                        <Box>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Advanced Technology:</b>


                            </Typography>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 10, sm: 10, md: 20, lg: 22, xl: 22 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Cutting-Edge Solutions</b>


                            </Typography>
                            <Typography
                                fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
                                mt={3}
                                sx={{
                                    // color: Colors.palette.secondary.grey, 
                                    lineHeight: "1.5", width: { xs: '350px', md: '450px' }
                                }}
                            >
                                Embracing technological innovation is at the core of our car wash services. We utilize state-of-the-art equipment and eco-friendly cleaning solutions to provide efficient and effective results. Our commitment to staying ahead of industry trends ensures that your car benefits from the latest advancements in car care technology. Experience the difference that
                                modern, advanced techniques can make in preserving and enhancing the condition of your vehicle.

                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            src={ourmissonImg}
                            alt="Car"
                            width="100%"
                            height="300px"
                        />
                    </Grid>


                    <Grid item xs={12} sm={12} md={5}>
                        <Box>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Customer Convenience:</b>


                            </Typography>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 10, sm: 10, md: 20, lg: 22, xl: 22 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Hassle-Free Experience</b>


                            </Typography>
                            <Typography
                                fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
                                mt={3}
                                sx={{
                                    // color: Colors.palette.secondary.grey, 
                                    lineHeight: "1.5", width: { xs: '350px', md: '450px' }
                                }}
                            >
                                We understand the value of your time and convenience. With our user-friendly online booking system, scheduling your car wash is just a few clicks away. Whether you opt for a Routine Clean to fit into your busy routine or a Deep Clean for a comprehensive makeover, our
                                services are designed to cater to your schedule. Enjoy the ease of a hassle-free car care experience with WowKaar.

                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            src={ourmissonImg}
                            alt="Car"
                            width="100%"
                            height="300px"
                        />
                    </Grid>



                    {/* ------------------------------------------------------------------------------------------------------ */}

                    <Grid item xs={12} sm={12} md={5}>
                        <Box>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 25, sm: 30, md: 35, lg: 37, xl: 37 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Environmental Responsibility:</b>


                            </Typography>
                            <Typography
                                variant="h6"
                                fontSize={{ xs: 10, sm: 10, md: 20, lg: 22, xl: 22 }}
                                sx={{ color: AppTheme.palette.primary.main }}
                            >
                                <b sx={{ color: AppTheme.palette.primary.main }}>Environmental Responsibility:</b>


                            </Typography>
                            <Typography
                                fontSize={{ xs: 13, sm: 13, md: 13, lg: 15, xl: 15 }}
                                mt={3}
                                sx={{
                                    //  color: Colors.palette.secondary.grey,
                                    lineHeight: "1.5", width: { xs: '350px', md: '450px' }
                                }}
                            >
                                Our commitment to environmental sustainability is evident in our water-saving practices, eco-friendly cleaning solutions, and responsible waste disposal. By choosing WowKaar, you contribute to a greener future while enjoying a spotless, polished
                                vehicle. We believe in the harmony of maintaining your car's aesthetic appeal while minimizing our ecological footprint.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            src={ourmissonImg}
                            alt="Car"
                            width="100%"
                            height="300px"
                        />
                    </Grid>












                </Grid>


            </Grid >







        </>
    )
}

export default Whyus