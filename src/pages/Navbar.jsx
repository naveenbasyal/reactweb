import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-light  ">
        <div className="row ">
          <div className="col-sm-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
                <NavLink 
                 exact
                 to="/" 
                 className="navbar-brand fs-3 fw-bold">
                  <span className="brandname">Coder</span>Naveen
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="link-active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="link-active"
                        className="nav-link active"
                        aria-current="page"
                        to="services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="link-active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="link-active"
                        className="nav-link active"
                        aria-current="page"
                        to="contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  {/* < class="d-flex"> */}
                    <button class="btn btn-style " type="submit">
                      SignUp
                    </button>
                    <button class="btn btn-style-border " type="submit">
                      Log In
                    </button>
                  {/* </> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
