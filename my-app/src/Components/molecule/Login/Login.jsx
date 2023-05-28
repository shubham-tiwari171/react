import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="form-wrapper">
          <div className="form-container">
            <form>
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <div className="text-center mb-3">
                  <p>Sign in with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                <div className="form-outline mb-4">
                  <input type="email" id="loginName" className="form-control" />
                  <label className="form-label" htmlFor="loginName">
                    Email or username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>

                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="registerName"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                  />
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
