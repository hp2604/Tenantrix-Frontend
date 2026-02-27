import React, { useState } from "react";
import Card from "../../../components/Card";
import Inputs from "../../../components/Inputs";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import Loader from "../../../components/Loader";
import { login } from "../../../services/Auth";
import { LoginSchemas } from "../../../schema";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slice/UserSlice";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../../../util/Token";
import "./Login.css"

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { values, handleSubmit, errors, touched, handleChange } = useFormik({
    initialValues: initialValue,
    validationSchema: LoginSchemas,
    onSubmit: async (values, action) => {
      try {
        setError(null);
        setLoading(true);
        const response = await login(values);
        setToken("token", response.data.token);
        dispatch(setUser(response.data.user));
        navigate("/dashboard");
        setLoading(false);
        action.resetForm();
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    },
  });
  return (
    <>
      <div className="container">
        <Card type={"vertical"} title={"Welcome Back !"}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <Inputs
              type={"email"}
              placeholder={"Email"}
              varient={errors.email && touched.email ? "error" : "normal"}
              handleChange={handleChange}
              value={values.email}
              name={"email"}
            />
            {errors.email && touched.email ? (
              <div className="error-message">{errors.email} </div>
            ) : null}
            <Inputs
              type={"password"}
              placeholder={"Password"}
              varient={errors.password && touched.password ? "error" : "normal"}
              max={8}
              handleChange={handleChange}
              value={values.password}
              name={"password"}
            />
            {errors.password && touched.password ? (
              <div className="error-message">{errors.password} </div>
            ) : null}
            <a href="/forget"> Forget Password</a>
            {loading ? (
              <button>
                <Loader width={"30"} height={"20"} visible={loading} />
              </button>
            ) : (
              <Button type={"submit"} text={"Sign In"} />
            )}
            <div id="login-link">
              <p>
                Don't have any Account? <a href="/"> Sign up</a>{" "}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
export default Login;
