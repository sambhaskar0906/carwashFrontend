import React, { createContext, useEffect, useState } from "react";
import Axios from "../utils/AxiosApi";
import { useNavigate } from "react-router";

export const SupervisorContext = createContext();

export function SupervisorProvider({ children }) {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState([]);
  const [supervisiordata, setsupervisiordata] = useState([]);
  const [UserLoading, setUserLoading] = useState(false);

  function getUserData(data) {
    setUserLoading(true);
    Axios.post("/sentotp", data)
      .then((res) => {
        console.log("data", res.data);
        setUserData(res.data);
        setUserLoading(false);
        navigate("/otp", {
          state: {
            formData: data,
            otp: res.data.otp,
            formType: "registerpage",
          },
        });
        alert("Otp Sent Successfully");
      })
      .catch((er) => {
        console.log("error raised", er);
        setUserLoading(false);
      });
  }
  function getAllSupervisior() {
    // setLoading(true);
    Axios.get("/get-allsupervisior")
      .then((res) => {
        setsupervisiordata(res.data);
        // setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        // setLoading(false);
      });
  }

  return (
    <SupervisorContext.Provider
      value={{
        getUserData,
        getAllSupervisior,
        UserLoading,
        UserData,
        supervisiordata,
      }}
    >
      {children}
    </SupervisorContext.Provider>
  );
}
