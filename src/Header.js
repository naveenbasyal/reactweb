import React from "react";
import BottomLine from "./pages/BottomLine";
const Header = () => {
  return (
    <>
      {/* -------------------------------------Left Side---------------------------------- */}
      <div className="container  main_header_section">
        <div className="row p-2">
          <div className="col-12 col-lg-6  header_left_side d-flex flex-column justify-content-center  ">
            <h2 className="display-5" data-aos="slide-right" data-aos-duration="800">
              Start Learning With <br />
              <strong>CoderNaveen</strong>
            </h2>
            <p className=" justify_text" data-aos="fade-up" data-aos-duration="500">
              “Perfection is achieved not when there is nothing more to add, but
              rather when there is nothing more to take away.” <br />
              <mark className="ms-lg-5"> – Naveen Basyal</mark>
            </p>
            <button className="col-sm-12 col-lg-4 mt-lg-5 lead btn-style-border p-2 mt-lg-2" data-aos="slide-left" data-aos-duration="1000">
              Get Started
            </button>
          </div>
          {/* -------------------------------------Right Side---------------------------------- */}

          <div className="col-12 col-lg-6 header_right_side d-flex justify-content-center align-items-center " data-aos="slide-left" data-aos-duration="1000"> 
            <img
              src="./images/man.jpg"
              className="img-fluid main_header_img1 "
              alt=""
            />
            <img
              src="./images/mac.jpg"
              className="img-fluid main_header_img2"
              alt=""
            />
          </div>
        </div>
      </div>
      <BottomLine/>
    </>
  );
};

export default Header;
