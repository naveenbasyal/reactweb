import React, { useState } from "react";
import howToPay from "./API/howToPay";
import BottomLine from "./pages/BottomLine";

const HowToPay = () => {
  const [pay, setpay] = useState(howToPay);
  return (
    <>
      <div className="container my-5 ">
        <h3 className="text-center my-5 fw-bold " data-aos="slide-left" data-aos-duration="800">How To Pay</h3>
        <div className="row  ">
          {/* LeftSide */}
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center" data-aos="slide-right" data-aos-duration="800">
            <img
              src="./images/pay.jpg"
              alt=""
              className="img-fluid pay_img w-50 "
              
            />
          </div>
          {/* RightSide */}
          <div className="col-12 col-lg-6 ">
            {pay.map((val, index) => {
              const { title, info, id } = val;
              return (
                <>
                  <div className="row my-5 d-flex align-items-center justify-content-center " data-aos="slide-left" data-aos-duration="800">
                    {/* <div className="col-1 num "></div> */}
                    <div className="col-9">
                      {/* <h4>{id}</h4> */}
                      <h4 className="fw-bold">{title}</h4>
                      <p className="info_center">{info}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <BottomLine/>
    </>
  );
};

export default HowToPay;
