
import React from 'react';
import { Paper, Grid} from '@mui/material';

function SubPaper() {
  const paperStyle = {
    width: '340px',
    borderRadius: "20px",
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'20px',
    height: '398px', 
    opacity:'0.5'
  };

  const contentStyle = {
    padding: '20px',
  };

  return (
    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={contentStyle}>
          
        </Grid>
      </Paper>
    </Grid>
  );
}

export default SubPaper;
