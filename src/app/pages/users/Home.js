import React, { useEffect, useRef } from "react";
import BackgroundImg from "../../components/Background";
import Nav from "../../partials/Nav";
import Question from "../../components/Question";
import Footer from "../../partials/Footer";
import Card1 from "../../components/Card";
import AboutGuest from "../../components/About";
import Review from "../../components/Review";
import Work from "../../components/Work";
import { Box, CssBaseline, Stack, Toolbar } from '@mui/material'
import { useLocation } from "react-router";
const Home = () => {


  return (
    <>
      <CssBaseline />
      <Toolbar />
      <BackgroundImg />
      <Stack rowGap={5}>
        <AboutGuest />
        <Card1 />
        <Work />
        <Review />

      </Stack>
      <Question />





    </>
  );
};

export default Home;
