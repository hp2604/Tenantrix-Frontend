import React, { useEffect, useState } from "react";
import "./Verification.css";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Inputs from "../../../components/Inputs";
import { useFormik } from "formik";
import { Otp } from "../../../schema";
import { data, useNavigate, useSearchParams } from "react-router-dom";
import { resendOtp, verifyOtp } from "../../../services/Auth";
import Loader from "../../../components/Loader";
import { removeToken } from "../../../util/Token";


const Verification = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isActive, setIsActive] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const[verifytoken,setVerifyToken]=useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/");
    }
    setVerifyToken(token)
  }, []);
  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      setIsActive(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive]);

  const initialValue = {
    otp: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: Otp,
    onSubmit: async (values) => {
      try {
        setError(null);
        setLoading(true);
        const response = await verifyOtp({
          email: user.email,
          otp: values.otp,
        },verifytoken);
        setLoading(false);
        removeToken('user')
        setMessage("SignUp SuccessFull  . Redirect to Login Page")
        setTimeout(()=>{
           navigate("/login");
        },5000)
       
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
  });

  const handleResend = async () => {
    try {
     const response= await resendOtp({ email: user.email },verifytoken);
      setMessage("OTP resent successfully");
      setTimeLeft(120);
      setIsActive(true);
    } catch (error) {
      if(error==="User already verified")
        {  setMessage("User already Verified . Redirect to Login Page")
          setTimeout(()=>{
           navigate("/login");
        },5000)
       }
      setError(error);
    }
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="container">
        {/* <div className="card">
            <div className="title">
                <h3>Verify Otp</h3>
            </div>
            <form action="">
                <input 
                className="suc"
                type="number" 
                name="otp"
                placeholder="Enter Otp" 
                />
                <Button text={"verify"} type={"submit"}/>
            </form>
        </div> */}
        <Card type={"vertical"} title={"Verify Code"}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
          <form action="" onSubmit={handleSubmit}>
            <Inputs
              type={"text"}
              varient={"normal"}
              name={"otp"}
              placeholder={"Enter OTP"}
              value={values.otp}
              handleChange={handleChange}
              max={6}
            />
            {errors.otp && touched.otp ? (
              <div className="error-message">{errors.otp} </div>
            ) : null}
            {isActive ? (
              <p>
                Resend OTP in {minutes}:{seconds < 10 ? "0" : ""}
                {seconds}
              </p>
            ) : (
              <a onClick={handleResend} style={{ color: "blue" }}>
                Resend
              </a>
            )}
            {loading ? (
              <button>
                {" "}
                <Loader width={"30"} height={"20"} visible={loading} />
              </button>
            ) : (
              <Button text={"Verify"} type={"submit"} />
            )}
          </form>
        </Card>
      </div>
    </>
  );
};

export default Verification;
