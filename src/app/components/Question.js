import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { NavLink } from "react-router-dom";
import AppTheme from '../themes/AppTheme.js'

const buttonStyle = {
  color: AppTheme.palette.primary.main,
  textTransform: "capitalize",
  fontSize: "18px",
  transition: "background-color 0.3s, color 0.3s",
};

const buttonHoverStyle = {
  // backgroundColor: Colors.palette.secondary.cardBackground,
  // color: Colors.palette.secondary.main,
};

const faqData = [
  {
    question: "How long have you been in business?",
    answer:
      "We have similar kind of experience in cleaning Industry for about 10 Yrs.",
  },
  {
    question: "What are the locations of your services?",
    answer:
      "Delhi NCR",
  },
  {
    question: "Do you charge by the job or the hour?",
    answer:
      "By the Job",
  },

];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // background: Colors.palette.primary.main,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    AppTheme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  height: "auto",
}));

const SmallerFontSizeTypography = styled(Typography)({
  fontSize: "20px",
  fontWeight: "600",
  // color: Colors.palette.primary.darkBlue,
});

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid xs={10} container sx={{ mt: 7 }} justifyContent={'center'} alignItems={'center'} margin={'auto'}>
      <Typography
        variant="h4"
        sx={{ color: AppTheme.palette.primary.main, mb: 5 }}
      >
        <b>Frequently Asked Question (FAQs)</b>
      </Typography>

      {faqData.map((item, index) => (
        <Accordion

          key={index}
          sx={{
            width: '100%',
            marginBottom: "20px",
            border: `1px solid ${AppTheme.palette.info.main}`,
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SmallerFontSizeTypography variant="h5">
              {item.question}
            </SmallerFontSizeTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
              //  color: Colors.palette.secondary.grey 
            }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NavLink to="/faqs" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            endIcon={<KeyboardDoubleArrowDownIcon />}
            sx={{
              color: AppTheme.palette.primary.main,
              ...buttonStyle,
              "&:hover": {
                ...buttonHoverStyle,
              },
            }}
          >
            More
          </Button>
        </NavLink>
      </Box>
    </Grid>
  );
}
