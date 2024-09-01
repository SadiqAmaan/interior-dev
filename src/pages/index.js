import Banner from "@/Components/Banner/Banner";
import Header from "@/Components/Global/Navbar/Header";
import React from "react";

const index = () => {
  return (
   <div className="main-body">
    <Header />
    <div className="main">
      <Banner/>
    </div>
   </div>
  );
};

export default index;
