import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";

const AdUserReq = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const tableHeaders = ["Date", "Booking ID", "Service Type", "Amount", ""];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/finduser-request");
      setTableData(
        response.data.map((item) => ({
          d1: item.date,
          d2: item.bookingId,
          d3: item.serviceType,
          d4: item.Amount,
          d5: (
            <div>
              <Button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  // color: Colors.palette.secondary.blue,
                }}
                onClick={() =>
                  navigate(`/`)
                }
              >
                <CheckIcon
                  sx={{
                    // color: Colors.palette.secondary.main,
                  }}
                />
              </Button>

              <Button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  // color: Colors.palette.secondary.blue,
                }}
                onClick={() =>
                  navigate(`/`)
                }
              >
                <CloseIcon sx={{ 

                  // color: Colors.palette.secondary.main 
                  }} />
              </Button>
            </div>
          ),
        }))
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <AdminDash />
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "22%", sm: "12%", md: "8%", lg: "5%" },
            marginLeft: { xs: "5%", sm: "1%", md: "30%", lg: "15%" },
            // color: Colors.palette.secondary.main,
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "inherit" },
            fontWeight: "600",
          }}
        >
          All Users Request
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "5%", sm: "2%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          {loading ? (
            <h1>
              <Loader />
            </h1>
          ) : (
            <Table data={tableData} headers={tableHeaders} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default AdUserReq;
