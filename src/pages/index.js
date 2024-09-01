import Banner from "@/Components/Banner/Banner";
import Gallery from "@/Components/Gallery/Gallery";
import Header from "@/Components/Global/Navbar/Header";
import React from "react";

const index = () => {
  return (
   <div className="main-body">
    <Header />
    <div className="main">
      <Banner/>
      <Gallery/>
    </div>
   </div>
  );
};

export default index;
