import "../button/button.css";
import "./login.css";
import InputComponent from "../input/input";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas/Login";

const initialValues = {
  email: "",
  password: "",
};
function LoginComponent() {
  const user = { eamil: "shakir@gmail.com", password: "12345678" };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validationSchema: LoginSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        if (values.email === user.eamil && values.password === user.password) {
          navigate("/dashboard");
        }
        action.resetForm();
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
