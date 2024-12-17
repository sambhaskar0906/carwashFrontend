// import React from "react";
// import { Card, CardContent, Grid } from "@mui/material";

// function Subscribecard({children,shadowColor}) {
//   const cardstyle1 = {
//     width: '380px',
//     borderRadius: "20px",
//     backgroundColor: '#FFFFFF',
//     gap:'20px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // padding: "20px"
//     // height: '535px', 
//     // mt:'428px',
//     // mb:'428px'
//     // opacity: ".8",
//     color:shadowColor,
//   };

//   // const contentStyle = {
//   //   padding: "20px",
//   // };

//   return (
//     <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'5%' ,mb:'5%',padding: "20px"}}>
//       <Card style={cardstyle1} >
//         {children}
//         {/* <CardContent style={cardstyle1}>
         
//         </CardContent> */}
//       </Card>
//     </Grid>
//   );
// }

// export default Subscribecard;


// import React from "react";
import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";

function Subscribecard({ children, shadowColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardstyle1 = {
    width: '380px',
    borderRadius: "20px",
    backgroundColor: '#FFFFFF',
    gap: '20px',
    border:"1px solid #e0e0e0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: shadowColor,
    boxShadow: isHovered ? "0px 5px 15px" : "none", 
    transition: "box-shadow 0.3s, color 0.3s", 
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '5%',
        // mb: '5%',
        padding: "20px",
      }}
    >
      <Card
        style={cardstyle1}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {children}
      </Card>
    </Grid>
  );
}

export default Subscribecard;



