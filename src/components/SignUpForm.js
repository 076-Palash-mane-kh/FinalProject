import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/SignIn.css";
// import Vpicupload from './Vpicupload';
import Otp from './Otp';
// import

function SignUpForm() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [securityQues, setSecurityQues] = useState("");
  // let [vpic, setVpic] = useState("");
  let [role, setRole] = useState("");
  let [securityAns, setSecurityAns] = useState("");

  let nameinp = (e) => setName(e.target.value);
  let passwordinp = (e) => setPassword(e.target.value);
  let emailinp = (e) => setEmail(e.target.value);
  let phoneinp = (e) => setPhone(e.target.value);
  let addressinp = (e) => setAddress(e.target.value);
  let cityinp = (e) => setCity(e.target.value);
  let stateinp = (e) => setState(e.target.value);
  // let vpicinp =(e) => setVpic(e.target.value);
  let roleinp = (e) => setRole(e.target.value);
  let securityquesinp = (e) => setSecurityQues(e.target.value);
  let securityansinp = (e) => setSecurityAns(e.target.value);

  let navigate = useNavigate();
  const Otp = () => {
    navigate("/Otp");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let userdata = {
      name: name,
      password: password,
      email: email,
      mobileNo: phone,
      address: address,
      city: city,
      state: state,
      securityQues: securityQues,
      securityAns: securityAns,
      role: role,
      // government_Id_img:vpic
    };

    localStorage.setItem("userdata", JSON.stringify(userdata));
    Otp();

    //   console.log("The form was submitted with the following data:");
    //  let res = await axios.post("http://localhost:8083/register",body)

    //  if(res.data!=null){
    //    alert("sucess")

    //   }
    //   else{
    //     alert("fail")
    //   }
  };

  return (
    <div
      className="container-fluid justify-content-center shadow my-5 text-dark"
      style={{ width: "500px" }}
    >
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            {/* <label className="formFieldLabel text-black" htmlFor="name">
          Full Name
        </label> */}
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={nameinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="password">
          Password
        </label> */}
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={passwordinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="email">
          E-Mail Address
        </label> */}
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={emailinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="phone">
          Mobile No.
        </label> */}
            <input
              type="text"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your Mobile No."
              name="phone"
              value={phone}
              onChange={phoneinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="address">
          Address 
        </label> */}
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter your address"
              name="address"
              value={address}
              onChange={addressinp}
            />
          </div>

          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="city">
          E-Mail Address
        </label> */}
            <input
              type="text"
              id="city"
              className="formFieldInput"
              placeholder="Enter your city"
              name="city"
              value={city}
              onChange={cityinp}
            />
          </div>
          <div className="formField">
            {/* <label className="formFieldLabel" htmlFor="state">
          E-Mail Address
        </label> */}
            <input
              type="text"
              id="state"
              className="formFieldInput"
              placeholder="Enter your State"
              name="state"
              value={state}
              onChange={stateinp}
            />
          </div>
          
          <div>
            {/* <label htmlFor="role" className="formFieldLabel"></label> */}
            <select
              id="role"
              name="role"
              placeholder="Choose a role"
              className="form-control form-control-md mb-2"
              value={role}
              onChange={roleinp}
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="donor">Donar</option>
              <option value="NGO">NGO</option>
            </select>
          </div>

          <div className="formField">
            <label htmlfor="securityQues" className="formFieldLabel">
              Security Question
            </label>
            <select
              id="securityQues"
              className="form-select"
              name="securityQues"
              onChange={securityquesinp}
              value={securityQues}
              required
            >
              <option value=""></option>
              <option value="Which was your first vehicle?">
                Which was your first vehicle?
              </option>
              <option value="Which is your favourite color?">
                Which is your favourite color?
              </option>
              <option value="Which was your first school?">
                Which was your first school?
              </option>
            </select>
            {/* <div class="invalid-feedback fs-6 fw-bold">{esecurityQues}</div> */}
          </div>

          <div className="col-md-6">
            <label htmlfor="securityAnswer" className="formFieldLabel">
              Your answer
            </label>
            <input
              type="text"
              className="form-control"
              id="securityAns"
              name="securityAns"
              placeholder="Remember this for forget password"
              onChange={securityansinp}
              // onFocus={clearErrors}
              value={securityAns}
              required
            />
            {/* <div class="invalid-feedback fs-6 fw-bold">{esecurityAns}</div> */}
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                // value={hasAgreed}
                // onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/signInForm" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
