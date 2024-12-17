
import React from 'react'
import Button from '@mui/material/Button';
const buttonStyle = {
    width: '158.08px',
    height: '58px',
    padding: '20px 40px',
    borderRadius: '20px',
    gap: '10px',
  backgroundColor: 'blue', 
  color: 'white', 
};


const Submit = () => {
  return (
    <Button variant="contained" style={buttonStyle}>
     Submit Button
   </Button>
  )
}

export default Submit