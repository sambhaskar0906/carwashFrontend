import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack, Typography, Button, Paper } from '@mui/material';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { useDispatch, useSelector } from "react-redux";
import { getAllServicePackage } from '../../store/slices/AuthSlice';
import BookingCard from '../../components/card/Bookingcard';

const CardPackage = () => {
  const dispatch = useDispatch();
  const { getservicepackage, getinfoservice } = useSelector(state => state?.AUTH || {});
  const packages = getservicepackage?.data || [];

  useEffect(() => {
    dispatch(getAllServicePackage());
  }, [dispatch, getinfoservice]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {packages.map((ele, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                color: '#000',
                padding: '8px',
                textAlign: 'center',
                boxShadow: '-1px 1px 5px -1px #232323',
                borderRadius: '10px',
                height: '300px',
                transition: 'height 0.3s ease',
                overflow: hoveredIndex === index ? 'scroll' : 'hidden',
              }}
            >
              <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>{ele.plantype}</Typography>
              <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>{ele.price}</Typography>
              <Stack spacing={1}>
                {ele.message.map((e, subIndex) => (
                  <Typography key={subIndex} sx={{ display: 'flex', alignItems: 'center', color: '#828282' }}>
                    <ArrowRightAltRoundedIcon sx={{ mr: 1 }} />
                    {e}
                  </Typography>
                ))}
              </Stack>
              <Button fullWidth variant="contained" size='small' sx={{ mt: 3, backgroundColor: '#D50000' }}>Delete</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardPackage;
