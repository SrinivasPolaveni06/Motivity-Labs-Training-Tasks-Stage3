import React from "react";
//import Navbar from "./components/Navabar";
import Header from "../Header";
import { data } from "../Headerdata";
import Carousel from "../Carousel";
import HomeCategoryProducts from "../HomeCategoryProducts";
import Footer from "../Footer";
import "./index.css";

const ProductsData = [
  {
    category: "Grocerys",
    navigateUrl: "/grocerys",
  },
  { category: "Mobile", navigateUrl: "/mobiles" },
  { category: "Electronics", navigateUrl: "/electronics" },
  { category: "Fashion", navigateUrl: "/fashion" },
  { category: "Home Meterials", navigateUrl: "/homematerials" },
  { category: "Vechiles", navigateUrl: "/vechiles" },
];

const index = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-evenly pt-1 headerContainer shadow ">
          {data.map((eachData) => (
            <Header key={eachData.category} eachData={eachData} />
          ))}
        </div>
        <div className="py-2 shadow ">
          <Carousel />
        </div>
        <div className="container-fluid">
          <div className="row py-4 d-flex align-items-center">
            {ProductsData.map((eachCategoryPdousct) => (
              <HomeCategoryProducts
                key={eachCategoryPdousct.category}
                eachCategoryPdousct={eachCategoryPdousct}
              />
            ))}
          </div>
        </div>
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default index;
