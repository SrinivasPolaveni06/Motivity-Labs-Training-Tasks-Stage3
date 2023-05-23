//import logo from './logo.svg';
import "./App.css";
//import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home/index";
import Product from "./pages/Product/index";
//import ProtectedRoute from "./components/ProtectedRoute";
//import TodosTable from "./components/TodoTable";
//import CraeteTodo from "./pages/CreateTodo";
//import { useState, useEffect } from "react";
//import SaveImages from "./pages/SaveImages";
import Dashboard from "./components/Dashboard";
import Fashion from "./components/Fashion";
import Bikes from "./components/TwoWheelers";
import Mobiles from "./components/Mobiles";
import HomeMaterials from "./components/HomeMetireals";
import Grocery from "./components/Grocery";
import Electronics from "./components/Electronics";
import ProductDashboard from "./components/ProductsDashboard";
import CartItems from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route element={<ProductDashboard />}>
            <Route path="vechiles" element={<Bikes />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="homematerials" element={<HomeMaterials />} />
            <Route path="grocerys" element={<Grocery />} />
            <Route path="electronics" element={<Electronics />} />
          </Route>
          <Route path="cart" element={<CartItems />} />
          {/* <Route path="todo" element={<CraeteTodo />} />
            <Route path="savefile" element={<SaveImages />} /> */}
        </Route>
        {/* </Route> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/" element={<Sidebar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
