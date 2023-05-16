import React from "react";
import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column g-3">
      <div>Services</div>
      <button className="btn btn-outline-dark">
        <Link to="/">Go back to App</Link>
      </button>
    </div>
  );
};
