import { createContext, useState } from "react";
import Axios from "../utils/Axios1";
export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminInfo, setadminInfo] = useState([]);
  const [Loading, setLoading] = useState(false);
  const headers = {
    "Content-Type": "application/json",
  };
  function createsupervisior(data) {
    console.log("jsonData", data);

    setLoading(true);
    Axios.post("/create-supervisior", data, headers)
      .then((res) => {
        console.log("admininfo", res.data);
        setadminInfo(res.data);
        //  navigate("/otp", {
        //    state: {
        //      formData: data,
        //      otp: res.data.otp,
        //      formType: "registerpage",
        //    },
        //  });
        setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setLoading(false);
      });
  }
  return (
    <AdminContext.Provider
      value={{ createsupervisior, Loading, adminInfo }}
    ></AdminContext.Provider>
  );
}
