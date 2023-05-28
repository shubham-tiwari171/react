import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "paris",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-container" style={{ marginTop: "100px" }}>
          <h3 className="title">Register</h3>
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                className="form-control"
                id="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="paris">Paris</option>
                <option value="new york">New York</option>
              </select>
            </div>

            <span className="signin-link">
              Already have an account? Click here to <a href="">Login</a>
            </span>
            <button type="submit" className="btn signup">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
