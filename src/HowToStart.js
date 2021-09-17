import React, { useState } from "react";
import howtostart from "./API/workApi";
import BottomLine from "./pages/BottomLine";

const HowToStart = () => {
  const [work, setWork] = useState(howtostart);
  return (
    <>
      <div className="container how_to_start  ">
        <h1
          className="text-center text-capitalize my-4 fw-bold"
          data-aos="slide-left"
        >
          how to start
        </h1>
        <div className="row d-flex align-items-center justify-content-center ">
          {work.map((val, index) => {
            const { logo, title, info } = val;
            return (
              <>
                <div
                  className="col-12 col-lg-3 bg-white cards p-4 mx-5"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <i className={`cdn_style ${logo}`}></i>
                  <h4 className="text-center bg-white my-4">{title}</h4>
                  <p className="bg-white ">{info}</p>
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

export default HowToStart;
