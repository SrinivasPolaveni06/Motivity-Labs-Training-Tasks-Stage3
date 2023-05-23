import React from "react";

import { useEffect, useState } from "react";
import { cartListCount } from "../Redux/Reducer";
import { useDispatch } from "react-redux";

const Index = (props) => {
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();
  //const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getGrocerysData();
  }, []);

  function getGrocerysData() {
    const CartItems = localStorage.getItem("cartProducts");
    //console.log(CartItems);
    // if(undefined){
    //   console.log("undefined")
    // }
    //console.log("undefined")
    if (CartItems) {
      const parsedData = JSON.parse(CartItems);
      const filteredData = parsedData.filter((eachdata) => {
        //console.log(eachdata.quantity)
        if (eachdata.quantity !== undefined) {
          if (eachdata.specialPrice !== undefined) {
            return eachdata;
          } else {
            eachdata["specialPrice"] = eachdata.price;
            eachdata["originalPrice"] = eachdata.original_price;

            return eachdata;
          }
          //return eachdata;
        } else {
          eachdata["quantity"] = 1;
          if (eachdata.specialPrice !== undefined) {
            return eachdata;
          } else {
            eachdata["specialPrice"] = eachdata.price;
            eachdata["originalPrice"] = eachdata.original_price;
            return eachdata;
          }
          //return eachdata;
        }
      });

      const quantityAmountUpdatedData = filteredData.map((eachProduct) => {
        return {
          ...eachProduct,
          price: eachProduct.specialPrice * eachProduct.quantity,
          original_price: eachProduct.originalPrice * eachProduct.quantity,
        };
      });
      //console.log(filteredData);
      // uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
      //filteredData.forEach((eachData)=>{
      //
      //})
      setCartData(quantityAmountUpdatedData);
      dispatch(cartListCount(quantityAmountUpdatedData));
    }
  }

  function onRemoveToCart(eachProduct) {
    const cartItems = localStorage.getItem("cartProducts");

    let UpDatedCart = [];
    if (cartItems !== null) {
      const JSONData = JSON.parse(cartItems);

      UpDatedCart = JSONData.filter(
        (productItem) => productItem._id !== eachProduct._id
      );
      localStorage.setItem("cartProducts", JSON.stringify(UpDatedCart));
      setCartData(UpDatedCart);
      dispatch(cartListCount(UpDatedCart));
    }
  }

  function onIncreaseQuantity(id) {
    const filteredData = cartData.map((product) => {
      if (product._id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
          price: product.specialPrice * (product.quantity + 1),
          original_price: product.originalPrice * (product.quantity + 1),
        };
      } else {
        return product;
      }
    });
    //console.log(filteredData);
    localStorage.setItem("cartProducts", JSON.stringify(filteredData));
    setCartData(filteredData);
  }

  function onDecrementQuantity(id) {
    const filteredData = cartData.map((product) => {
      if (product._id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
          price: product.specialPrice * (product.quantity - 1),
          original_price: product.originalPrice * (product.quantity - 1),
        };
      } else {
        return product;
      }
    });
    //console.log(filteredData);
    const filteredData2 = filteredData.filter(
      (product) => product.quantity !== 0
    );

    localStorage.setItem("cartProducts", JSON.stringify(filteredData2));
    setCartData(filteredData2);
  }

  function grocerysProduct() {
    return (
      <>
        <div className="row shadow-sm my-4 px-3">
          <div className=" col-12 d-flex  justify-content-end">
            <button className="btn btn-primary"> Clear All</button>
          </div>
          {cartData.map((eachProduct) => (
            <div key={eachProduct._id} className=" col-lg-3 ">
              <div className="product-card m-1 my-3 shadow-sm d-flex flex-column justify-content-center  text-center  p-2">
                <div>
                  {eachProduct.title === "Trevi Fabric 6 Seater Sofa" ? (
                    <img
                      src={eachProduct.img_url}
                      width="80%"
                      alt={eachProduct.title}
                      className="m-1 productImage1 mb-2"
                    />
                  ) : (
                    <img
                      src={eachProduct.img_url}
                      width="60%"
                      alt={eachProduct.title}
                      className="m-1 productImage2 mb-2"
                    />
                  )}
                </div>
                <div
                  class="btn-group-sm"
                  role="group"
                  aria-label="Second group"
                >
                  {eachProduct.quantity === 1 ? (
                    <button
                      type="button"
                      disabled
                      class="btn btn-secondary btn-sm m-1"
                      onClick={() => onDecrementQuantity(eachProduct._id)}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm m-1"
                      onClick={() => onDecrementQuantity(eachProduct._id)}
                    >
                      -
                    </button>
                  )}

                  <button type="button" class="btn btn-light btn-sm m-1">
                    {eachProduct.quantity ? eachProduct.quantity : 1}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm m-1"
                    onClick={() => onIncreaseQuantity(eachProduct._id)}
                  >
                    +
                  </button>
                </div>

                <div>
                  <h6>{eachProduct.title}</h6>
                  <p>{eachProduct.description}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="SpecialPrice">
                      Special Price: <br />
                      <span className>{eachProduct.price.toFixed(2)}</span>
                    </p>
                    <p className="ms-auto me-3 price">
                      {eachProduct.original_price.toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn py-2 cartBtn text-white me-2"
                      onClick={(event) => onRemoveToCart(eachProduct)}
                    >
                      <i className="bi bi-cart-fill"></i> Remove TO CART
                    </button>
                    <button className="btn py-2  text-white BUYBtn  ms-auto">
                      <i className="bi bi-lightning-fill "></i>BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row py-4">{grocerysProduct()}</div>
      </div>
    </>
  );
};

export default Index;
