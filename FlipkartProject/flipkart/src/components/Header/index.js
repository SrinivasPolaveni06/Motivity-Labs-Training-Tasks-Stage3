import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const index = ({ eachData }) => {
  return (
    <div>
      <NavLink to={eachData.navigateUrl}>
        <button className="categorysButton">
          <img
            src={eachData.imageUrl}
            className="categorysImage"
            alt={eachData.imageUrl}
          />
          <p className="categoryTitle">{eachData.category}</p>
        </button>
      </NavLink>
    </div>
  );
};

export default index;
