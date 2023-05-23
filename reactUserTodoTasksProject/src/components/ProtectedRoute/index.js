import React from "react";
//import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Index = () => {
  let Token = localStorage.getItem("userToken");
  return <>{Token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Index;
