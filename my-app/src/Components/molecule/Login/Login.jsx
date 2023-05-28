import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // const formData = { ...loginForm };
    console.log(loginForm);
    setLoginForm({
      email: "",
      password: "",
    });
    // You can perform further actions with the formData object,
    // such as sending it to a server or processing it in some way.
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container" style={{ marginTop: "100px" }}>
          <h3 className="title">Register</h3>
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
              Already have an account? Click here to <a href="">Login</a>
            </span>
            <button className="btn signup">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
