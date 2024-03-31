import React, { useState } from "react";
import "../button/button.css";
import "./login.css";
import InputComponent from "../input/input";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas/Login";

function LoginComponent() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validationSchema: LoginSchema,
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/v1/admin/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            console.log("Token:", data.token);

            // Redirect to the dashboard
            navigate("/dashboard");
          } else {
            const errorData = await response.json();
            setError(errorData.message);
          }
        } catch (error) {
          console.error("Error:", error.message);
          setError("An error occurred. Please try again later.");
        }
      },
    });

  return (
    <form action="#" className="login-div" onSubmit={handleSubmit}>
      <div className="title-login">
        <p>Login</p>
      </div>
      <div>
        <div className="inputStyDiv">
          <InputComponent
            type="text"
            inputId="inputOne"
            placeholder="email address"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            icon={<HiOutlineMail />}
            iconStyle="iconSty"
          />
          <p
            style={{
              textAlign: "start",
              padding: "0px 0px  0px 20px ",
              color: "red",
              fontSize: "12px",
            }}
          >
            {errors.email && touched.email ? errors.email : null}
          </p>
        </div>
        <div className="inputStyDiv">
          <InputComponent
            icon={<HiOutlineLockClosed />}
            type="password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            name="password"
            inputId="inputTwo"
            placeholder="password"
            iconStyle="iconSty"
          />
          <p
            style={{
              textAlign: "start",
              padding: "0px 0px  0px 20px ",
              color: "red",
              fontSize: "12px",
            }}
          >
            {errors.password && touched.password ? errors.password : null}
          </p>
        </div>
        <div className="forgotPass">
          <div className="checkboxStyle">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <div className="recoverPass">
            <p>Forget Password?</p>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          value="LogIn"
          className="btn-style"
          style={{ cursor: "pointer" }}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginComponent;
