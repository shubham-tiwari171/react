import React from "react";
import "./Register.css";
const Register = () => {
  return (
    // <div className="form-bg">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-offset-3 col-md-6">
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container" style={{ marginTop: "100px" }}>
          <h3 className="title">Register</h3>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User Name"
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
            <h4 className="sub-title">Personal Information</h4>
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control" id="city">
                <option value="paris">Paris</option>
                <option value="new york">New York</option>
              </select>
            </div>
            <div className="check-terms">
              <input type="checkbox" className="checkbox" id="terms" />
              <label className="check-label" htmlFor="terms">
                I agree to the terms
              </label>
            </div>
            <span className="signin-link">
              Already have an account? Click here to <a href="">Login</a>
            </span>
            <button className="btn signup">Create Account</button>
          </form>
        </div>
      </div>
      //{" "}
    </>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Register;
