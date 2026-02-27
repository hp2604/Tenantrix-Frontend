import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Inputs from "../../../components/Inputs";
import { useFormik } from "formik";
import { Otp } from "../../../schema";
import { data, useNavigate, useSearchParams } from "react-router-dom";
import { resendOtp, verifyOtp } from "../../../services/Auth";
import Loader from "../../../components/Loader";
import { removeToken } from "../../../util/Token";
import SuccessCard from "../../../components/SuccessCard";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slice/UserSlice";
import { SquareCheck } from 'lucide-react';
import "./Verification.css"

const Verification = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isActive, setIsActive] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verifytoken, setVerifyToken] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const[tittle,setTittle]=useState("Verify OTP")
  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/");
    }
    setVerifyToken(token);
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
        const response = await verifyOtp(
          {
            email: user.email,
            otp: values.otp,
          },
          verifytoken,
        );
        setLoading(false);
        dispatch(setUser(user));
        setTittle(" ")
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
  });

  const handleResend = async () => {
    try {
      const response = await resendOtp({ email: user.email }, verifytoken);
      setMessage("OTP resent successfully");
      setTimeLeft(120);
      setIsActive(true);
    } catch (error) {
      setError(error);
      if (error === "User already verified") {
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    }
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
 const click=()=>{
        navigate("/dashboard")
    }
  return (
    <>
      <div className="container">
        <Card type={"vertical"} title={tittle}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!success && (
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
          )}
          {success && (
            <div id="success-card">
              {" "}
              <SquareCheck size={80} color="green" />
              <h2> Account created successfully</h2>
              <Button text={" DashBoard"} onClick={click}>
                {" "}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default Verification;
