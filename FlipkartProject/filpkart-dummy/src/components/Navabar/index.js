import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { cartListCount } from "../Redux/Reducer";
import { useDispatch } from "react-redux";
import "./index.css";
const Index = () => {
  useEffect(() => {
    getGrocerysData();
  }, []);
  const dispatch=useDispatch();

  function getGrocerysData() {
    const CartItems = localStorage.getItem("cartProducts");
    //console.log(CartItems);
    if (CartItems) {
     // setCartData(JSON.parse(CartItems));
      dispatch(cartListCount(JSON.parse(CartItems)))
    }
    
  }
  const count = useSelector((sate) => sate.cartCountSlice.cartCount);
  //console.log(count);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarContainer bg-body-tertiary ">
        <div className="container-fluid ">
          <div className="d-flex flex-column ">
            <a className="navbar-brand text-white title pb-0 mb-0" href="/">
              Flipkart
            </a>
            <a className="navbar-brand text-white Explore pt-0 mt-0" href="/">
              Explore <span className="Plus">Plus</span>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse Searchwidth"
            id="navbarSupportedContent"
          >
            <form className="d-flex position-relative" role="search">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btnSearch text-white" type="submit">
                <i className="bi bi-search searchIcon"></i>
              </button>
            </form>
            <button className="btn bg-white text-primary px-4">
              <b>Login</b>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="/cart">
                  Cart <span class="badge bg-danger ">{count}</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-dark " href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-dark" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
