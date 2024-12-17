
import React from 'react';
import Button from '@mui/material/Button';

function Cancel({ color }) {
  const buttonStyle = {
    width: '154px',
    height: '54px',
    padding: '20px 40px',
    borderRadius: '20px',
    gap: '10px',
    backgroundColor: '#353535',
    // boxShadow: ` ${Colors.palette.secondary.main}`,
    transition: 'box-shadow 3s',
  };

  const hoverStyle = {
    ':hover': {
      // boxShadow: `5px 15px ${Colors.palette.primary.main}`, 
    },
  };

  return (
    <Button variant="contained" sx={{ ...buttonStyle, ...hoverStyle }}>
      cancel
    </Button>
  );
}

export default Cancel;
