import React from "react";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Header from "../Header";
import HowToPay from "../HowToPay";
import HowToStart from "../HowToStart";
import Service from "../Service";

const Home = () => {
  return (
    <>
     <Header/>
     <HowToStart/>
     <Service/>
     <HowToPay/>
     <ContactUs/>
     <Footer/>
    </>
  );
};

export default Home;
