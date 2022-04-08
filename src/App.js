import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import UserHome from "./components/UserHome";
import Footer from "./components/Footer";
import AdminHome from "./components/AdminHome";
import DonateUs from "./components/DonateUs";
import NavbarHome from "./components/NavbarHome";
import Otp from "./components/Otp";
import Vpicupload from "./components/Vpicupload";
import "./CSS/SignIn.css" 

function App() {
  return (
    <BrowserRouter>
    <NavbarHome />
    <Routes>



    {/* <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
            //   <NavLink
            //     to="/sign-in"
            //     activeClassName="pageSwitcherItem-active"
            //     className="pageSwitcherItem"
            //   >
            //     Sign In
            //   </NavLink>
            //   <NavLink
            //     exact
            //     to="/"
            //     activeClassName="pageSwitcherItem-active"
            //     className="pageSwitcherItem"
            //   >
            //     Sign Up
            //   </NavLink>
            // </div>

            // <div className="formTitle">
            //   <NavLink
            //     to="/sign-in"
            //     activeClassName="formTitleLink-active"
            //     className="formTitleLink"
            //   >
            //     Sign In
            //   </NavLink>{" "}
            //   or{" "}
            //   <NavLink
            //     exact
            //     to="/"
            //     activeClassName="formTitleLink-active"
            //     className="formTitleLink"
            //   >
            //     Sign Up
            //   </NavLink>
            // </div>

            // <Route exact path="/" component={SignUpForm} />
            // <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router> */}




      <Route exact path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/SignInForm" element={<SignInForm />} />
      <Route path="/SignUpForm" element={<SignUpForm />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/UserHome" element={<UserHome />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/AdminHome" element={<AdminHome />} />
      <Route path="/DonateUs" element={<DonateUs />} />
      <Route exact path="/NavbarHome" element={<NavbarHome />} />
      <Route exact path="/Vpicupload" element={<Vpicupload/>} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
