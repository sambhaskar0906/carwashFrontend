// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import image1 from "../assests/images/Quote-Above.png";
// import image2 from "../assests/images/Quote-Below.png";
// import Colors from "../utils/colors";
// const cards = [
//   {
//     content:
//       "Outstanding service! Impeccable cleaning, prompt pickup, and a gleaming car. Highly recommended for car care. <br/><br/> ~ Amet ipsum ",
//   },
//   {
//     content:
//       "Exceptional service, the deep clean was immaculate, and the pick-up/drop-off option made it hassle-free. Highly recommended !! <br/><br/> ~ Lorem ipsum",
//   },
//   {
//     content:
//       "A few days ago, encountered exceptional service. The clean was immaculate, drop-off and pick-up offered utmost convenience. A remarkable experience. <br/><br/> ~ Adipiscing",
//   },
//   {
//     content:
//       "My car's now a gleaming showstopper, thanks to the exceptional service, shining, spotless, and absolutely stunning after cleaning. <br/><br/> ~ Amet ipsum",
//   },
// ];

// const Review = () => {
//   return (
//     <Container>
//       <Box sx={{ mt: 10 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             color: Colors.palette.secondary.main,
//             marginBottom: "50px",
//             fontWeight: "bold",
//           }}
//         >
//           Review
//         </Typography>

//         <Grid container spacing={2}>
//           {cards.map((card, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   border: `2px dashed ${Colors.palette.secondary.main}`,
//                   // border: `2px dotted ${Colors.palette.secondary.main}`,
//                   // border: `2px dot-dot-dash ${Colors.palette.secondary.main}`,

//                   position: "relative",
//                 }}
//               >
//                 <img
//                   src={image1}
//                   alt="TopImage"
//                   style={{
//                     position: "absolute",
//                     top: "0",
//                     left: "0",
//                     width: "30px",
//                     height: "30px",
//                     zIndex: 1,
//                   }}
//                 />

//                 <img
//                   src={image2}
//                   alt="BottomImage"
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     right: "0",
//                     width: "30px",
//                     height: "30px",
//                     zIndex: 1,
//                   }}
//                 />

//                 <CardContent
//                   sx={{
//                     marginTop: "40px",
//                     flex: 1,
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     style={{ color: Colors.palette.secondary.black }}
//                     dangerouslySetInnerHTML={{ __html: card.content }}
//                   />
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Review;

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
// import image1 from "";
import image2 from "../assests/images/Lower_Quads.svg";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AppTheme from "../themes/AppTheme";


const cards = [
  {
    content:
      "Outstanding service! Impeccable cleaning, prompt pickup, and a gleaming car. Highly recommended for car care. <br/><br/><b> ~ Shubham Bhaskar</b> ",
  },
  {
    content:
      "Exceptional service, the deep clean was immaculate, and the pick-up/drop-off option made it hassle-free. Highly recommended !! <br/><br/><b> ~ Shivangi Gupta</b>",
  },
  {
    content:
      "A few days ago, encountered exceptional service. The clean was immaculate, drop-off and pick-up  <br/><br/><b> ~ Sooraj Bhardwaz</b>",
  },
  {
    content:
      "My car's now a gleaming showstopper, thanks to the exceptional service, shining, spotless, and absolutely stunning. <br/><br/><b> ~ Deep Singh</b>",
  },
];

const Review = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  return (
    <Container>
      <Box >
        <Typography
          variant="h4"
          sx={{
            color: AppTheme.palette.primary.main,
            mb: 5,
            fontWeight: "bold",
          }}
        >
          Review
        </Typography>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  height: "90%",
                  padding: "20px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "transform 0.5s",
                  transform: hoveredStep === index ? "scale(1.05)" : "scale(1)",
                  borderRadius: "10px",
                  boxShadow:
                    hoveredStep === index
                      ? `5px 5px 15px  black`
                      : AppTheme.palette.primary.main,
                  "&:hover": {
                    background: `linear-gradient(180deg, #eeeded 40%,  ${AppTheme.palette.primary.light} 60%)`,
                  },
                }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >



                <svg

                  viewBox="0 0 38 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,
                  }}
                >
                  <path d="M3.51562 33.1562H12.8906C14.8315 33.1562 16.4062 31.5815 16.4062 29.6406V20.2656C16.4062 18.3247 14.8315 16.75 12.8906 16.75H7.03125V12.0625C7.03125 9.47705 9.1333 7.375 11.7188 7.375H12.3047C13.2788 7.375 14.0625 6.59131 14.0625 5.61719V2.10156C14.0625 1.12744 13.2788 0.34375 12.3047 0.34375H11.7188C5.24414 0.34375 0 5.58789 0 12.0625V29.6406C0 31.5815 1.57471 33.1562 3.51562 33.1562ZM24.6094 33.1562H33.9844C35.9253 33.1562 37.5 31.5815 37.5 29.6406V20.2656C37.5 18.3247 35.9253 16.75 33.9844 16.75H28.125V12.0625C28.125 9.47705 30.2271 7.375 32.8125 7.375H33.3984C34.3726 7.375 35.1562 6.59131 35.1562 5.61719V2.10156C35.1562 1.12744 34.3726 0.34375 33.3984 0.34375H32.8125C26.3379 0.34375 21.0938 5.58789 21.0938 12.0625V29.6406C21.0938 31.5815 22.6685 33.1562 24.6094 33.1562Z" fill={AppTheme.palette.primary.main} />
                </svg>




                <svg
                  viewBox="0 0 38 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "30px",
                    height: "30px",
                    zIndex: 1,

                  }}

                >
                  <path d="M34.4844 0.34375H25.1094C23.1685 0.34375 21.5938 1.91846 21.5938 3.85938V13.2344C21.5938 15.1753 23.1685 16.75 25.1094 16.75H30.9688V21.4375C30.9688 24.0229 28.8667 26.125 26.2812 26.125H25.6953C24.7212 26.125 23.9375 26.9087 23.9375 27.8828V31.3984C23.9375 32.3726 24.7212 33.1562 25.6953 33.1562H26.2812C32.7559 33.1562 38 27.9121 38 21.4375V3.85938C38 1.91846 36.4253 0.34375 34.4844 0.34375ZM13.3906 0.34375H4.01562C2.07471 0.34375 0.5 1.91846 0.5 3.85938V13.2344C0.5 15.1753 2.07471 16.75 4.01562 16.75H9.875V21.4375C9.875 24.0229 7.77295 26.125 5.1875 26.125H4.60156C3.62744 26.125 2.84375 26.9087 2.84375 27.8828V31.3984C2.84375 32.3726 3.62744 33.1562 4.60156 33.1562H5.1875C11.6621 33.1562 16.9062 27.9121 16.9062 21.4375V3.85938C16.9062 1.91846 15.3315 0.34375 13.3906 0.34375Z" fill={AppTheme.palette.primary.main} />
                </svg>

                <CardContent
                  sx={{
                    marginTop: "20px",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      opacity: hoveredStep === index ? 1 : 0.8,

                    }}
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
