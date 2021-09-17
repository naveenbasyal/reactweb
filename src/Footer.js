import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <>
      <div className="container-fluid bg-dark main_Footer  ">
        <div className="row  p-lg-2 my-4 my-lg-3 bg-dark d-flex align-items-center justify-content-center">
          <div className="col-8  my-lg-0 bg-dark">
            <div className="row  bg-dark d-flex align-items-center justify-content-center">
              <div className="col-3 text-center bg-dark">
                <i class="social_style fab fa-facebook"></i>
              </div>
              <div className="col-3 text-center bg-dark">
                <i class="social_style fab fa-instagram"></i>
              </div>
              <div className="col-3 text-center bg-dark">
                <i class="social_style fab fa-github"></i>
              </div>
              <div className="col-3 text-center bg-dark">
                <i class="social_style fab fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center  py-lg-3 my-3  my-lg-0 bg-dark">
          <div className="col-12 text-center text-white py-3 bg-dark font-monospace">
            © {year} Copyright :
            <span className="text-success bg-dark ">CoderNaveen</span>.com
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
