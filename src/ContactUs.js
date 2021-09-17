import React, { useState } from "react";

const ContactUs = () => {
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNo, email, address, message } = userData;
    if (firstName && lastName && phoneNo && email && address && message) {
      const res = fetch(
        "https://pure-fold-307117-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNo,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert(" 😄 Data Sent");
      } else {
        alert("Plz Fill the Data !");
      }
    } else {
      alert("Plz Fill the Data  !");
    }
    setuserData({
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      address: "",
      message: "",
    });
  };
  console.log(userData);
  return (
    <>
      <div className="container my-5 ">
        <h3
          className="text-center fw-bold my-5"
          data-aos="slide-left"
          data-aos-duration="800"
        >
          Connect With US
        </h3>
        <div className="row">
          <div className="col-12 col-lg-11 mx-auto">
            <div className="row mx-auto">
              <div
                className="col-12 col-lg-4 my-4 d-flex align-items-center justify-content-center"
                data-aos="slide-right"
                data-aos-duration="800"
              >
                <img
                  src="./images/contact.jpg"
                  alt=""
                  className="img-fluid contact_img "
                />
              </div>
              {/* Right Side */}
              <div className="col-1"></div>
              <div className="col-12 col-lg-6 my-5 d-flex align-items-center justify-content-center">
                <form action="POST">
                  <div className="row ">
                    <div
                      className="col-12 col-lg-6 my-2 my-lg-0 "
                      data-aos="slide-right"
                      data-aos-duration="800"
                    >
                      <input
                        type="text"
                        className="w-100 form-control "
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}
                        name="firstName"
                      />
                    </div>
                    <div
                      className="col-12 col-lg-6  "
                      data-aos="slide-left"
                      data-aos-duration="800"
                    >
                      <input
                        type="text"
                        className="w-100 form-control"
                        placeholder="Last Name"
                        value={userData.lastName}
                        onChange={postUserData}
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div
                      className="col-12 col-lg-6 my-2 my-lg-0"
                      data-aos="slide-left"
                      data-aos-duration="800"
                    >
                      <input
                        type="text"
                        className="w-100 form-control"
                        placeholder="Phone No"
                        value={userData.phoneNo}
                        onChange={postUserData}
                        name="phoneNo"
                      />
                    </div>
                    <div
                      className="col-12 col-lg-6 "
                      data-aos="slide-right"
                      data-aos-duration="800"
                    >
                      <input
                        type="email"
                        className="w-100 form-control"
                        placeholder="Email id"
                        value={userData.email}
                        onChange={postUserData}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div
                      className="col-12"
                      data-aos="slide-right"
                      data-aos-duration="800"
                    >
                      <input
                        type="text"
                        className="w-100 form-control"
                        placeholder="Address"
                        value={userData.address}
                        onChange={postUserData}
                        name="address"
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div
                      className="col-12"
                      data-aos="slide-left"
                      data-aos-duration="800"
                    >
                      <input
                        type="text"
                        className="w-100 form-control"
                        placeholder="Enter Your Message"
                        value={userData.message}
                        onChange={postUserData}
                        name="message"
                      />
                    </div>
                  </div>
                  <div
                    className="form-check my-4"
                    data-aos="slide-up"
                    data-aos-duration="800"
                  >
                    <input type="checkbox" className="form-check-input" />
                    <label className="text-success">
                      I agree that all my information above is correct.
                    </label>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                      <button
                        onClick={submit}
                        className="col-12 btn btn-style"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
