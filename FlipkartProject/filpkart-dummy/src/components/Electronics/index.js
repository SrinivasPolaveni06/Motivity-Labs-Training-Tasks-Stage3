import React from "react";

import { useEffect, useState ,useContext} from "react";
import { sortingContext } from "../Context";
import axios from "axios";
//import FilterComponent from "../FilterComponent";
import { cartListCount } from "../Redux/Reducer";
import { useDispatch } from "react-redux";
import "./index.css";

const Index = () => {
  const [grocerysData, setGrocerysData] = useState([]);
  const dispatch = useDispatch();
  const { sortValue } = useContext(sortingContext);
  useEffect(() => {
    getGrocerysData();
  }, [sortValue]);

  function getGrocerysData() {
    axios
      .get(`http://localhost:3005/product/?search=Electronics&order_by=${sortValue.price}&order=${sortValue.name}`)
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
        <div className="row d-flex justify-content-between">
          {grocerysData.map((eachProduct) => (
            <div
              key={eachProduct._id}
              className="col-lg-3 product-card shadow m-2  p-2"
            >
              <img
                src={eachProduct.img_url}
                width="90%"
                alt={eachProduct.title}
                className="m-1 productImage mb-2"
              />

              <div>
                <h6>{eachProduct.title}</h6>
                <p>{eachProduct.description}</p>
                <div className="d-flex align-items-center">
                  <p className="SpecialPrice">
                    Special Price: <br />
                    <span className>{eachProduct.price.toFixed(2)}</span>
                  </p>
                  <p className="ms-auto me-3 price">
                    {eachProduct.original_price.toFixed(2)}
                  </p>
                </div>
                <div className="d-flex">
                  <button className="btn py-2 cartBtn text-white me-2"  onClick={(event) => onAddToCart(eachProduct)}>
                    
                    <i className="bi bi-cart-fill"></i> ADD TO CART
                  </button>
                  <button className="btn py-2  text-white BUYBtn  ms-auto">
                    
                    <i className="bi bi-lightning-fill "></i>BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  function onAddToCart(eachProduct) {
    const cartItems = localStorage.getItem("cartProducts");
    //console.log(cartItems);
    //console.log(eachProduct);
    const newChangedProduct = {
      ...eachProduct,
      specialPrice: eachProduct.price,
      originalPrice: eachProduct.original_price,
      quantity: 1,
    };
    // eachdata["specialPrice"] = eachdata.price;
    //         eachdata["originalPrice"] = eachdata.original_price;
    let UpDatedCart = [];
    if (cartItems !== null) {
      const JSONData = JSON.parse(cartItems);
      //console.log(JSONData);
      let condition = false;
      const newData = JSONData.map((eachData) => {
        if (eachData._id === newChangedProduct._id) {
          condition = true;
          return { ...eachData, quantity: eachData.quantity + 1 };
        } else {
          return eachData;
        }
      });
      //console.log(newData);
      //console.log(condition);

      if (condition === true) {
        UpDatedCart = newData;
      } else {
        UpDatedCart = [...newData, newChangedProduct];
      }

      // UpDatedCart.push()
      localStorage.setItem("cartProducts", JSON.stringify(UpDatedCart));
    } else {
      UpDatedCart.push(newChangedProduct);
      localStorage.setItem("cartProducts", JSON.stringify(UpDatedCart));
    }
    //eachProduct
    dispatch(cartListCount(UpDatedCart));
    //console.log(UpDatedCart);
  }
  return (
    // <div className="container ">
    //   <div className="row py-4">
    //     <div className="col-3">
    //       <FilterComponent />
    //     </div>
        <div >
          <h3 className="text-danger">Top Electronics items List:</h3>
          <hr className="Grocerys" />
          {grocerysProduct()}
        </div>
    //   </div>
    // </div>
  );
};

export default Index;
