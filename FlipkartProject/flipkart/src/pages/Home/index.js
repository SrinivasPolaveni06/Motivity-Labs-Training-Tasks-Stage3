import React from "react";
import Navbar from "../../components/Navabar";
// import Header from "../../components/Header";
// import { data } from "../../components/Headerdata";
// import Carousel from "../../components/Carousel";
//import FilterComponent from "../../components/FilterComponent";
import "./index.css";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <div className="d-flex justify-content-evenly pt-1 headerContainer shadow ">
          {data.map((eachData) => (
            <Header key={eachData.category} eachData={eachData} />
          ))}
        </div>
        <div className="py-2 shadow ">
          <Carousel />
        </div>
      </div> */}
      <Outlet/> 
      
    </>
  );
};

export default index;
