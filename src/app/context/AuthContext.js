import { createContext, useState } from "react";
import Axios from "../utils/AxiosApi";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [UserInfo, setUserInfo] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [VerifyLoading, setVerifyLoading] = useState(false);
  const [ContactData, setContactData] = useState([]);
  // const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
  };

  function userRegistration(data, navigate) {
    console.log("jsonData", data);
    setLoading(true);
    Axios.post("/sentotp", data, headers)
      .then((res) => {
        console.log("UserData", res.data);
        localStorage.setItem("otp", res.data.otp);
        setUserInfo(res.data);
        navigate("/otp", {
          state: {
            formData: data,
            otp: res.data.otp,
            formType: "registerpage",
          },
        });
        setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setLoading(false);
      });
  }

  function verifyotp(formData, otp, navigate) {
    const data = {
      ...formData,
      otp,
    };
    setVerifyLoading(true);
    Axios.post("/verifyotp", data)
      .then((res) => {
        navigate("/home");
        console.log("Verify OTP", res.data);
        setUserInfo(res.data);
        setVerifyLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setVerifyLoading(false);
      });
  }

  function userLogin(data, navigate) {
    setLoading(true);
    Axios.post("/login", data)
      .then((res) => {
        console.log("UserData", res.data);
        alert('login Successfull')
        setUserInfo(res.data);
        setLoading(false);
        navigate('home')
      })
      .catch((er) => {
        console.log("errorrAISEDonLogin", er);
        alert('Wrong credentials')
        setLoading(false);
      }).finally(() => {
        setLoading(false)
      });

  }

  function forgetPassword(data, navigate) {
    setLoading(true);
    Axios.post("/forgetpassword", data)
      .then((res) => {
        console.log("UserData", res.data);
        setUserInfo(res.data);
        localStorage.setItem("otp", res.data.otp);
        navigate("/passwordreset", {
          state: {
            otp: res.data.otp,
          },
        });
        setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setLoading(false);
      });
  }

  function createcontact(data) {
    setLoading(true);
    Axios.post("/create-contact", data)
      .then((res) => {
        console.log("ContactData", res.data);
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        setLoading(false);
      });
  }

  function getData() {
    // setLoading(true);
    Axios.get("/get-contact")
      .then((res) => {
        setContactData(res.data);
        // setLoading(false);
      })
      .catch((er) => {
        console.log("error", er);
        // setLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{

        userRegistration,
        createcontact,
        verifyotp,
        getData,
        forgetPassword,
        ContactData,
        VerifyLoading,
        userLogin,
        Loading,
        UserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
