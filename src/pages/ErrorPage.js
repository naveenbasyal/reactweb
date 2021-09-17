import React from "react";
import Footer from "../Footer";

const ErrorPage = () => {
  return (
    <>
      <div className="container error_404">
        <div className="row mt-5 ">
          <h1 className="fw-bolder display-3">Oops , Page Not Found !</h1>
          <p className="text-secondary fs-3 my-5">
            We couldn't find what you were looking for.
          </p>
          <p className="fs-5">
            Please contact the owner of the site that linked you to the original
            URL and let them know their <br />
            link is broken.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
