import React, { useEffect, useState } from "react";
import "./Register.css";
import { v4 as uuidv4 } from "uuid";
import {
  getCityData,
  postApiforRegister,
  getApiforRegister,
} from "../../../api/api";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
  });
  const [cities, setCities] = useState([]);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCityName();
    isStudentExist();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, id: uuidv4(), [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      city: "",
    });
    //console.log(formData);
  };

  const getCityName = async () => {
    try {
      const res = await getCityData();
      setCities(res);
    } catch (error) {
      console.error(error);
    }
  };

  const isStudentExist = async () => {
    try {
      const res = await getApiforRegister();
      setStudent(res);
    } catch (error) {
      console.error(error);
    }
  };

  const registerStudent = async () => {
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.phone === "" ||
      formData.city === ""
    ) {
      alert("some fields are empty");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Password validation checks
    if (formData.password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }
    let isStudentExist = student.find(
      (student) =>
        student.name === formData.name && student.email === formData.email
    );
    if (isStudentExist) {
      alert("Student already exists");
      return;
    }
    try {
      let res = await postApiforRegister(formData);
      res.status === 201 ? navigate("/login") : navigate("/signup");
    } catch (error) {}
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
                {cities &&
                  cities.length > 0 &&
                  cities.map((city) => (
                    <option key={city.state_id} value={city.state_name}>
                      {city.state_name}
                    </option>
                  ))}
              </select>
            </div>

            <span className="signin-link">
              Already have an account? Click here to <a href="">Login</a>
            </span>
            <button
              type="submit"
              className="btn signup"
              onClick={registerStudent}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
