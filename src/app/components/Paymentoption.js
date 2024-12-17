import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

function PaymentOptions() {

  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h6" sx={{
        //  color: Colors.palette.secondary.main 
      }}>
        Payment Method
      </Typography>
      <RadioGroup
        aria-label="payment-method"
        name="payment-method"
        value={paymentMethod}
        onChange={handlePaymentChange}
      >
        {/* <FormControlLabel
          value="creditCard"
          control={<Radio />}
          label="Credit Card"
        /> */}
        <FormControlLabel
          value="cashOnDelivery"
          control={<Radio />}
          label="CashOnDelivery"
        />
        {/* <FormControlLabel
          value="UPI"
          control={<Radio />}
          label="UPI"
        /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default PaymentOptions;
