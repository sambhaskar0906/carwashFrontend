import React from "react";
import AdminDash from "../../components/AdDash";
import EditSuperVisorCredentials from "../../components/EditSupervisorCredentials";

import { Box, Typography } from "@mui/material";

const AdCreateSup = () => {
  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"

      >

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"

        >
          <EditSuperVisorCredentials />
        </Box>
      </Box>
    </>
  );
};

export default AdCreateSup;
