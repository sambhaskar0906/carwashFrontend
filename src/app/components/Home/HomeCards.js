import { Box, Container, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import crate1 from "../../assests/images/crate1.png";
import crate2 from "../../assests/images/crate2.png";
import crate3 from "../../assests/images/crate3.png";
import crate4 from "../../assests/images/crate4.png";
import Cardshome from "../../assests/images/cardshome.png";
import Groupaeroplane from '../../assests/images/Groupaeroplane.png'
import AppTheme from "../../themes/AppTheme";
const HomeCards = () => {
  return (
    <>

      <Grid Container width={'90%'} justifyContent={'center'} alignItems={'center'} margin={'auto'} p={2} sx={{
        mt: 10,
        backgroundImage: `url(${Groupaeroplane})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }} >

        <Grid container xs={10}>
          <Grid item>
            <Typography
              fontSize={50}
              color={AppTheme.palette.primary.main}

            >
              <b>Our Washing Services</b>
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              fontSize={16}
              color={AppTheme.palette.primary.main}
              textAlign={"center"}
              sx={{ marginTop: "16%", ml: 3 }}
            >
              <Stack direction={"row"} >  <Typography sx={{ color: 'black' }}>WITH &nbsp;</Typography>
                <b> MODERN EQUIPMENT</b></Stack>

            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={5} alignItems={"center"} mt={2} p={3}>
          {/* .......Card No. 1 */}
          <Grid item xs={12} sm={8} md={3} lg={3}>
            <Paper
              // elevation={10}
              sx={{
                height: 290,
                // width: 200,
                borderRadius: 5,
                padding: 1,
                background:
                  "linear-gradient(30deg, #FFFFFF 40%, #E3E1E1 60%)",
              }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate1}
                  sx={{ height: 100, width: 100, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={AppTheme.palette.primary.main}
                textAlign={"center"}
                mt={2}
              >
                <b>Contactless Washing</b>
              </Typography>
              <Typography fontSize={{ xs: '10', md: '15' }} textAlign={"center"} mt={1}>
                Vestibulum tortor risus, rutrum at congue sed ultricies
                finibus.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating
                  name="size-medium"
                  defaultValue={4}
                  sx={{ color: AppTheme.palette.primary.main }}
                />
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 2 */}
          <Grid item xs={12} sm={8} md={3} lg={3}>
            <Paper
              // elevation={10}
              sx={{
                height: 290,
                // width: 200,
                borderRadius: 5,
                padding: 1,
                backdropFilter: "blur(10%)",
                background:
                  "linear-gradient(30deg, #FFFFFF 10%, #B3A8A8 90%)",
              }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate2}
                  sx={{ height: 100, width: 100, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={AppTheme.palette.primary.main}
                textAlign={"center"}
                mt={2}
              >
                <b>Safety Materials</b>
              </Typography>
              <Typography fontSize={{ xs: '10', md: '15' }} textAlign={"center"} mt={1}>
                Cras aliquam tristique metus, eu gravida diam vestibulum
                gravida.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating
                  name="size-medium"
                  defaultValue={4}
                  sx={{ color: AppTheme.palette.primary.main }}
                />
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 3 */}
          <Grid item xs={12} sm={8} md={3} lg={3}>
            <Paper
              // elevation={10}
              sx={{
                height: 290,
                // width: 200,
                borderRadius: 5,
                padding: 1,
                backdropFilter: "blur(10%)",
                background:
                  "linear-gradient(30deg, #e6e3e3 30%, #c4bbbb 60%)",
              }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate3}
                  sx={{ height: 100, width: 100, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={AppTheme.palette.primary.main}
                textAlign={"center"}
                mt={2}
              >
                <b>Modern Equipment</b>
              </Typography>
              <Typography fontSize={{ xs: '10', md: '15' }} textAlign={"center"} mt={1}>
                Fusce maximus molestie nisl, ut dapibus libero vestibulum
                aliquam.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating
                  name="size-medium"
                  defaultValue={4}
                  sx={{ color: AppTheme.palette.primary.main }}
                />
              </Typography>
            </Paper>
          </Grid>
          {/* .......Card No. 4 */}
          <Grid item xs={12} sm={8} md={3} lg={3}>
            <Paper
              // elevation={10}
              sx={{
                height: 290,
                // width: 200,
                borderRadius: 5,
                padding: 1,
                backdropFilter: "blur(10%)",
                background:
                  "linear-gradient(30deg, #cccaca 40%, #c2baba 60%)",
              }}
            >
              <Typography textAlign={"center"}>
                <Box
                  component={"img"}
                  src={crate4}
                  sx={{ height: 100, width: 100, mt: 1 }}
                />
              </Typography>
              <Typography
                fontSize={17}
                color={AppTheme.palette.primary.main}
                textAlign={"center"}
                mt={2}
              >
                <b>Extensive Cleaning</b>
              </Typography>
              <Typography fontSize={{ xs: '10', md: '15' }} textAlign={"center"} mt={1}>
                Sestibulum non dolor sit amet mi moles tincidunt vel non
                velit.
              </Typography>
              <Typography mt={2} textAlign={"center"}>
                <Rating
                  name="size-medium"
                  defaultValue={4}
                  sx={{ color: AppTheme.palette.primary.main }}
                />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </>
  );
};

export default HomeCards;
