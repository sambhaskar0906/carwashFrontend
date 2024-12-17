import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Button, Box, Grid, Stack } from "@mui/material";
import AppTheme from "../themes/AppTheme";

import Axios from "../utils/AxiosApi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCarType,
  getAllCleanType,
  getAllPackageType,
  getAllServicePackage,
  getInfOnService
} from "../store/slices/AuthSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const [selectedCleaningType, setSelectedCleaningType] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const { getcarname, getservicepackage, getallcarType, getallcleantype } = useSelector((state) => state?.AUTH || {}); // Ensure to provide a default empty object if state.AUTH is undefined

  useEffect(() => {
    if (!getallcarType) {
      dispatch(getAllCarType());
    }
    if (!getallcleantype) {
      dispatch(getAllCleanType());
    }
    dispatch(getAllServicePackage());
  }, [dispatch, getallcarType, getallcleantype]);

  const cleanTypeArray = getallcleantype?.data?.[0]?.cleainingType || [];
  const model = getallcarType?.data?.[0]?.cartype || [];

  const handleGoButtonClick = () => {

    if (selectedCleaningType == null || selectedModel == null) {
      alert("Plaese Input Clean Type and Car model !")
    }
    else {
      dispatch(getInfOnService([selectedCleaningType, selectedModel]))
    }



  };

  return (
    <Box sx={{
      // backgroundColor: AppTheme.palette.primary.main,
      p: 2
    }}>
      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} mt={1}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            sx={{
              width: 300,
              color: AppTheme.palette.primary.dark,
              '& .MuiInputLabel-root': {
                color: AppTheme.palette.primary.dark,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
                '&:hover fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
                '&.Mui-focused fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
              },
            }}
            disablePortal
            id="cleaning-type"
            size="small"
            options={cleanTypeArray?.map(e => ({ label: e }))}
            value={selectedCleaningType}
            onChange={(event, newValue) => setSelectedCleaningType(newValue)}

            renderInput={(params) => <TextField
              {...params}
              label="Cleaning Type"
              InputLabelProps={{
                style: { color: AppTheme.palette.primary.dark }, // label color
              }}
              inputProps={{
                ...params.inputProps,
                style: { color: AppTheme.palette.primary.dark }, // input field text color
              }}
            />}
          />
        </Grid>
        <Grid item xs={12} md={4}>


          <Autocomplete
            sx={{
              width: 300,
              color: AppTheme.palette.primary.dark,
              '& .MuiInputLabel-root': {
                color: AppTheme.palette.primary.dark,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
                '&:hover fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
                '&.Mui-focused fieldset': {
                  borderColor: AppTheme.palette.primary.dark,
                },
              },
            }}
            disablePortal
            id="car-model"
            size="small"
            options={model?.map(e => ({ label: e }))}
            value={selectedModel}
            onChange={(event, newValue) => setSelectedModel(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Car Model"
                InputLabelProps={{
                  style: { color: AppTheme.palette.primary.dark }, // label color
                }}
                inputProps={{
                  ...params.inputProps,
                  style: { color: AppTheme.palette.primary.dark }, // input field text color
                }}
              />
            )}
          />

        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={handleGoButtonClick}
            sx={{
              width: "100px",
              borderRadius: "8px",
              marginBottom: "8%",
              color: AppTheme.palette.primary.dark,
              border: `2px solid ${AppTheme.palette.primary.dark}`,
              "&:hover": {
                border: `3px solid ${AppTheme.palette.primary.dark}`,
                backgroundColor: AppTheme.palette.common.white,
                color: AppTheme.palette.primary.dark,
                fontWeight: 'bold'
              },
            }}
          >
            Go
          </Button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Searcher;
