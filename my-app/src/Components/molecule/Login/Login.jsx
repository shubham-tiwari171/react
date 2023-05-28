import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container" style={{ marginTop: "100px" }}>
          <h3 className="title">Register</h3>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
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
