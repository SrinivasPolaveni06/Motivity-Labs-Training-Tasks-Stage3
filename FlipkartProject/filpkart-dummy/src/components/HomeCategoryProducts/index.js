import React from "react";

import { useEffect, useState } from "react";
//import { sortingContext } from "../Context";
import axios from "axios";
import { NavLink } from "react-router-dom";
//import FilterComponent from "../FilterComponent";
import { cartListCount } from "../Redux/Reducer";
import { useDispatch } from "react-redux";
import "./index.css";

const Index = (props) => {
  const { eachCategoryPdousct } = props;
  const [grocerysData, setGrocerysData] = useState([]);
  //const { sortValue } = useContext(sortingContext);
  useEffect(() => {
    getGrocerysData();
  }, []);

  function getGrocerysData() {
    axios
      .get(
        `http://localhost:3005/product/?search=${eachCategoryPdousct.category}&order_by=""&order=""&limit=4`
      )
      .then((res) => {
        console.log(res);
        setGrocerysData(res.data);
      })
      .catch((err) => {
        console.log(err, "GRocerys error");
      });
  }

  function grocerysProduct() {
    return (
      <>
        <div className="d-flex shadow-sm my-4 px-3">
          {grocerysData.map((eachProduct) => (
            <div
              key={eachProduct._id}
              className="product-card shadow-sm d-flex flex-column justify-content-center m-1 my-3 text-center  p-2"
            >
              <div>
                <img
                  src={eachProduct.img_url}
                  width="40%"
                  alt={eachProduct.title}
                  className="m-1 productImage1 mb-2"
                />
              </div>

              <div>
                <h6>{eachProduct.title}</h6>
                <p>{eachProduct.description}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="SpecialPrice">
                    Special Price: <br />
                    <span className>{eachProduct.price.toFixed(2)}</span>
                  </p>
                  {/* <p className="ms-auto me-3 price">
                    {eachProduct.original_price.toFixed(2)}
                  </p> */}
                </div>
                {/* <div className="d-flex">
                  <button className="btn py-2 cartBtn text-white me-2">
                    <i className="bi bi-cart-fill"></i> ADD TO CART
                  </button>
                  <button className="btn py-2  text-white BUYBtn  ms-auto">
                    <i className="bi bi-lightning-fill "></i>BUY NOW
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col-3">
        <NavLink
          to={eachCategoryPdousct.navigateUrl}
          className="text-decoration-none"
        >
          <div className="bg-primary p-5 text-center rounded text-white">
            <h5>
              View Top New {eachCategoryPdousct.category} Products{" "}
              <i className="bi fs-4 rightIcon bi-box-arrow-right"></i>
            </h5>
          </div>
        </NavLink>
      </div>
      <div className="col-9 ">
        {/* <h3 className="text-danger">Top Fashion List:</h3>
      <hr className="Grocerys" /> */}
        {grocerysProduct()}
      </div>
    </>

    // <div>
    //   <h3 className="text-danger">Top Fashion List:</h3>
    //   <hr className="Grocerys" />
    //   {grocerysProduct()}
    // </div>
  );
};

export default Index;
