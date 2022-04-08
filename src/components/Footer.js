import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                MEDRELIEF
              </h5>
              <p>
                We are here to bridge the gap between the NGOs and the people who wishes to donate 
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                we Accept
              </h5>
              <p>
                <link to="#" class="text-white">
                  Medicines
                </link>
              </p>
              <p>
                <link to="#" class="text-white">
                  Medical Care Tools
                </link>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/Home" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/DonateUs" class="text-white">
                  DONATE
                </Link>
              </p>
              {/* <p>
                <Link to="/view" class="text-white">
                  VIEW DONATION
                </Link>
              </p> */}
              <p>
                <Link to="/AboutUs" class="text-white">
                  PROFILE
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Khargar, Mumbai
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>medirelief.cdac@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9876543210
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 8974561230
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2022 All rights reserved by:
                <link to="#">
                  <strong class="text-warning">Team 44 CDAC MUMBAI</strong>
                </link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
