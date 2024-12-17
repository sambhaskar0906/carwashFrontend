import React from 'react'
import { Box, Container, Grid, Typography, Button, Toolbar } from "@mui/material";

import Nav from "../partials/Nav";
import Whyusimage from '../assests/images/Whyusimage.png'
import comprehensThird from '../assests/images/comprehensiveServices_thirdImage.png'
import Footer from "../partials/Footer";
import AppTheme from '../themes/AppTheme';

const appStyle = {
    ImgStyle: {

        transition: 'transform 0.5s ease', // Add transition property for smooth effect
        borderRadius: '8px',
        '&:hover': {
            borderRadius: '8px',
            transform: 'scale(1.2)',

        }

    }
}


function Gallery() {
    return (
        <>
            {/* <Nav /> */}
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
                                Gallery
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>




            <Grid container xs={12} sx={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Typography
                        variant="h5"
                        sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
                        gutterBottom
                    >
                        <b>Before-and-After</b>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            marginLeft: "5%",
                            lineHeight: "1.8",
                            width: { xs: '90%', md: 'auto' }
                        }}
                    >
                        Witness the stunning transformations as we take vehicles from dirt and grime to a showroom
                        shine. Our before-and-after shots showcase the remarkable results of our expert car wash services.
                    </Typography>
                </Grid>

                <Grid container xs={12} direction={'row'} justifyContent={"center"} sx={{ gap: '20px', marginTop: '20px', }}>
                    <Grid item xs={10} sm={8} md={3}
                        sx={{
                            height: '250px',
                            overflow: 'hidden',
                            '&:hover': {
                                borderRadius: '8px'
                            }

                        }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />

                    </Grid >
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                </Grid>





            </Grid>
            {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}


            <Grid container xs={12} sx={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Typography
                        variant="h5"
                        sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
                        gutterBottom
                    >
                        <b>Before-and-After</b>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            marginLeft: "5%",
                            lineHeight: "1.8",
                            width: { xs: '90%', md: 'auto' }
                        }}
                    >
                        Witness the stunning transformations as we take vehicles from dirt and
                        grime to a showroom shine. Our before-and-after shots showcase the remarkable results of our expert car wash services.
                    </Typography>
                </Grid>

                <Grid container xs={12} direction={'row'} justifyContent={"center"} sx={{ gap: '20px', marginTop: '20px', }}>
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid >
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                </Grid>





            </Grid>


            {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}


            <Grid container xs={12} sx={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Typography
                        variant="h5"
                        sx={{ marginLeft: "5%", color: AppTheme.palette.primary.main }}
                        gutterBottom
                    >
                        <b>Before-and-After</b>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            marginLeft: "5%",
                            lineHeight: "1.8",
                            width: { xs: '90%', md: 'auto' }
                        }}
                    >
                        Witness the stunning transformations as we take vehicles from dirt and
                        grime to a showroom shine. Our before-and-after shots showcase the remarkable results of our expert car wash services.
                    </Typography>
                </Grid>

                <Grid container xs={12} direction={'row'} justifyContent={"center"} sx={{ gap: '20px', marginTop: '20px', }}>
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid >
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                    <Grid item xs={10} sm={8} md={3} sx={{
                        height: '250px',
                        overflow: 'hidden',
                        '&:hover': {
                            borderRadius: '8px'
                        }

                    }}>
                        <img width={'100%'} height={'100%'} src={comprehensThird}
                            style={appStyle.ImgStyle}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                    </Grid>
                </Grid>





            </Grid>




        </>
    )
}

export default Gallery