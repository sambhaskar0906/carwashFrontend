import * as React from "react";
import { Container, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FAQSeracher from "./FAQSearcher";
import AppTheme from "../themes/AppTheme";

const faqData = [
  {
    question: "What types of cars do you usually work on?",
    answer:
      "All type of",
  },
  {
    question: "What additional services do you offer?",
    answer:
      "Available on request",
  },
  {
    question: "What type of products or equipment’s you are using?",
    answer:
      "Best grade in the Industry",
  },
  {
    question: "Are your manpower well trained and groomed?",
    answer:
      "Yes",
  },
  {
    question: "Are you providing car wash services?",
    answer:
      "Yes",
  },
  {
    question: "Are you working seven days in a week?",
    answer:
      "Yes",
  },
  {
    question: "Is there one-time service provided for car cleaning?",
    answer:
      "Yes",
  },
  {
    question: "Can hire a cleaner personally?",
    answer:
      "No",
  },
  {
    question: "What is the timings to Connect with Customer Support ?",
    answer:
      "10 AM to 6 PM ( Mon to Saturday )",
  }
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
    theme.palette.mode === "dark"
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
    <>
      <Toolbar />
      <Container sx={{ my: 10 }}>
        <Typography
          variant="h2"
          align="center"
        // sx={{ marginTop: "20px", color: Colors.palette.secondary.main }}
        >
          Website FAQs
        </Typography>
        <Typography
          align="center"
        // sx={{ marginTop: "20px", color: Colors.palette.secondary.main }}
        >
          Explore answers to the most commonly asked questions.
        </Typography>
        <FAQSeracher />
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
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
              <Typography
              //  sx={{ color: Colors.palette.secondary.grey }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
