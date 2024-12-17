// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
// } from "@mui/material";
// import Nav from "../../partials/Nav";
// import Subscribecard from "../../components/card/Subscribecard"
// import Hover from "../../components/card/Hover";
// import Cancel from "../../components/Button/Cancel";
// const Subscriptions = () => {
//   return (
//     <>
//       <Nav />

//       <Box
//         sx={{
//           width: "100%",
//           textAlign: "center",
//           marginTop: "5%",
//           marginBottom: "15%",
//         }}
//       >
//         <Grid>
//           <Typography variant="h4" sx={{ color: "#002C4F" }}>
//             <b> Subscriptions </b>
//           </Typography>
//         </Grid>

//         <Grid
//           container
//           item
//           spacing={2}
//           sx={{ justifyContent: "center", marginTop: "5%", padding: "20px" }}
//         >
//           {/* <Grid item xs={12} sm={6} md={4}> */}
//             <Subscribecard>
//               <CardContent >
//                 <Typography
//                   variant="h4"
//                   sx={{ textAlign: "center", color: " #DC77FF" }}
//                 >
//                   <b>
//                     {" "}
//                     Platinum <br />₹ 2199 / month
//                   </b>
//                 </Typography>
//                 <Typography sx={{ marginTop: "8%" }}>
//                    <ul style={{ listStyleType: '' }} >
//                     <li >Exterior Wash, removing dust and grime.</li> <br />
//                     <li>
//                       Interior Vaccuming, dusting seats and carpets and floor
//                       mats.
//                     </li>{" "}
//                     <br />
//                     <li>
//                       Cleaning and Polishing all windows and mirrors.
//                     </li>{" "}
//                     <br />
//                     <li>Cleaning and Shining tires and rims.</li> <br />
//                     <li>
//                       Wiping down interior surface, including dashboard and door
//                       panels. <br />
//                       <br />
//                     </li>
//                     <li>Exterior Wash, removing dust and grime.</li> <br />
//                     <li>
//                       Interior Vaccuming, dusting seats and carpets and floor
//                       mats.
//                     </li>{" "}
//                     <br />
//                     <li>
//                       Cleaning and Polishing all windows and mirrors.
//                     </li>{" "}
//                     <br />
//                     <li>Cleaning and Shining tires and rims.</li> <br />
//                     <li>
//                       Wiping down interior surface, including dashboard and door
//                       panels.
//                       <br />
//                       <br />
//                     </li>
//                   </ul> 
                  

//                 </Typography>

//                 <Typography 
//                 sx={{ textAlign: "left", marginLeft: "10%" }}
//                 >
//                   <b>Expiring on: 04/10/2023</b>
//                 </Typography>

//                 <Typography sx={{ marginTop: "8%" }}>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       borderRadius: "22px",
//                       bgcolor: "#353535",
//                       height: "55px",
//                       width: "150px",
//                       marginInline: "30%",
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                   {/* <Cancel color={'yellow'}>

//                   </Cancel> */}
//                   {/* <Hover shadowColor={'yellow'}>
//                     this is hover box
//                   </Hover>
//                   <Hover shadowColor={'red'}>
//                     this is hover box
//                   </Hover>
//                   <Hover shadowColor={'green'}>
//                     this is hover box
//                   </Hover> */}
//                 </Typography>
//               </CardContent>
//             </Subscribecard>
//           {/* </Grid> */}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Subscriptions;

import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Nav from "../../partials/Nav";
import Subscribecard from "../../components/card/Subscribecard";
import Cancel from "../../components/Button/Cancel";
// import Hover from "../components/card/Hover";
// import Cancel from "../components/Button/Cancel";
const Subscriptions = () => {
  return (
    <>
      <Nav />

      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "5%",
          marginBottom: "15%",
        }}
      >
        <Grid>
          <Typography variant="h4" sx={{ color: "#002C4F" }}>
            <b> Subscriptions </b>
          </Typography>
        </Grid>

          <Subscribecard 
          // shadowColor={Colors.palette.secondary.darkPurple}
          >
            
            <CardContent>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: " #DC77FF" }}
              >
                <b>
                  {" "}
                  Platinum <br />₹ 2199 / month
                </b>
              </Typography>
              <Typography sx={{ marginTop: "8%" }}>
                <List >
                  <ListItem >
                      <DoneAllOutlinedIcon />
                    <ListItemText style={{marginLeft:'15px'}}primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
           
                      <DoneAllOutlinedIcon />
                   
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                   
                      <DoneAllOutlinedIcon />
                  
                    <ListItemText style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                
                      <DoneAllOutlinedIcon />
                
                    <ListItemText style={{marginLeft:'15px'}} primary="Wiping down interior surfaces, including dashboard and door panels." />
                  </ListItem>
                </List>
              </Typography>

              <Typography sx={{ textAlign: "center", marginLeft: "10%" }}>
                <b>Expiring on: 04/10/2023</b>
              </Typography>

              <Typography sx={{ marginTop: "8%" }}>
                {/* <Button
                
                  variant="contained"
                  sx={{
                    borderRadius: "22px",
                    bgcolor: "#353535",
                    height: "55px",
                    width: "150px",
                    marginInline: "30%",
                  }}
                >
                  Cancel
                </Button> */}
                <Cancel/>
              </Typography>
            </CardContent>
          </Subscribecard>
      </Box>
    </>
  );
};

export default Subscriptions;
