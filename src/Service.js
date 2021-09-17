import React, { useState } from "react";
import serviceapi from "./API/serviceApi";
import BottomLine from "./pages/BottomLine";

const Service = () => {
  const [service, setservice] = useState(serviceapi);
  return (
    <>
      <div className="container mt-1 how_to_start ">
        <h3
          className="text-center fw-bold"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          What We Provide
        </h3>
        <div className="row d-flex align-items-center justify-content-center">
          {service.map((val, index) => {
            const { logo, title, info } = val;
            return (
              <>
                <div
                  className="col-12 col-lg-3 bg-white cards p-4 mx-5"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <i className={`cdn_style ${logo}`}></i>
                  <h4 className="text-center bg-white h4 my-4">{title}</h4>
                  <p className="bg-white justify_text">{info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <BottomLine />
    </>
  );
};

export default Service;
