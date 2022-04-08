import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/SignIn.css";
import Otp from "./Otp";
import Vpicupload from "./Vpicupload";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const id = event.target.id;
    if (id === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    //console.log(this.state);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 text-center">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <button className="formFieldButton">Sign In</button>{" "}
              </div>
              <div className="formField">
                {/* <button className="formFieldButton">Create an account</button>{" "} */}
                <div>
                  <Link to="/SignUpForm" className="formFieldLink mr-5">
                    Create an account
                  </Link>
                </div>
                <div>
                  {/* <button className="formFieldButton"> Forgot Password</button>{" "} */}
                  {/* </div>
              <div className="formField"> */}
                  {/* <button className="formFieldButton">Sign In</button>{" "} */}
                  <Link
                    to="/ForgotPassword"
                    className="formFieldLink"
                    // style={{ position: relative }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-6">
          <img
            src="https://people.utoronto.ca/wp-content/uploads/illustrations/undraw_collab_8oes.svg"
            width={500}
            height={800}
          ></img>
        </div>
      </div>{" "}
      {/* <div className="appAside" style={{ width: "50%" }}></div>
       */}
    </div>
  );
}

export default SignInForm;
