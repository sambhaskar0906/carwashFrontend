import React from "react";
import Nav from "../../partials/Nav";
import Ourplans from "../../components/Ourplans";
import Footer from "../../partials/Footer";
import Cards from "../../components/Cards";
import Subscribe from "./Subscribe";
import Searcher from "../../components/Searcher";
import Question from "../../components/Question";
import Review from "../../components/Review";
import { Box, Toolbar, Grid } from "@mui/material";
const Services = () => {
  return (
    <>
      <Toolbar />
      <>
        <Searcher />
        <Ourplans />
        <Cards />
        <Review />
        <Question />

      </>

    </>
  );
};

export default Services;
