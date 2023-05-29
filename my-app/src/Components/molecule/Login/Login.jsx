import React, { useEffect, useState } from "react";
import "./Login.css";
import { v4 as uuidv4 } from "uuid";
import { getApiforRegister } from "../../../api/api";
import { useNavigate, useLoaderData } from "react-router-dom";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    id: "",
    email: "",
    password: "",
  });
  const [student, setStudent] = useState([]);
  const [rememberMe, setRememberMe] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  let navigateTo = useNavigate();

  useEffect(() => {
    getStudentList();
  }, []);

  const handleInputChange = (e) => {
    setLoginForm({ ...loginForm, id: uuidv4(), [e.target.id]: e.target.value });
  };

  const getStudentList = async () => {
    try {
      let res = await getApiforRegister();
      setStudent(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // console.log(loginForm);
    setLoginForm({
      email: "",
      password: "",
    });
  };

  const hendleSignInClick = () => {
    let isStudentExist = student.find(
      (student) =>
        student.name === loginForm.name &&
        student.password === loginForm.password
    );
    if (isStudentExist) {
      navigateTo("/quiz");
      alert("Welcome to our portal");
      return;
    }
    // Handle invalid login credentials
    alert("Invalid login credentials");
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleClickAdminLogin = () => {
    setAdminLogin(!adminLogin);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container" style={{ marginTop: "100px" }}>
          <div className="login-header">
            <div>
              <h3 className="title">
                {adminLogin === true ? "Admin Login" : "User Login"}
              </h3>
            </div>
            <div>
              {/* <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Default switch checkbox input
                </label>
              </div> */}
              <button
                style={{ marginTop: "0px", width: "6rem" }}
                className="btn btn-primary"
                onClick={handleClickAdminLogin}
              >
                {adminLogin === true ? "admin" : "user"}
              </button>
            </div>
          </div>

          <form className="form-horizontal" onSubmit={handleLoginFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address"
                value={loginForm.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleInputChange}
              />
            </div>
            <span className="signin-link">
              Already have an account? Click here to <a href="/">Login</a>
            </span>
            <button className="btn signup" onClick={hendleSignInClick}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
