import React, { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import { Outlet } from "react-router-dom";
import { sortingContext } from "../Context";

const Index = () => {
  const initalValues = {
    price: "",
    name:"",
  };
  const [sortValue, setSort] = useState(initalValues);
  // const [sort1, setSort1] = useState(initalValues);

  // useEffect(()=>{
  //   //console.log(sortValue)
  //   console.log(sort1);
  //   setSort1(sortValue)
  // },[sortValue])

  // function onChangeSort(data) {
  //   console.log(data);
  //   setSort(data);
  // }
  return (
    <sortingContext.Provider value={{ sortValue, setSort }}>
      <div className="container ">
        <div className="row py-4">
          <div className="col-2">
            <FilterComponent />
          </div>
          <div className="col-9 ">
            <Outlet />
          </div>
        </div>
      </div>
    </sortingContext.Provider>
  );
};

export default Index;
