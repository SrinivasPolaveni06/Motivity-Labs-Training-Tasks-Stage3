import React from "react";
import { useContext } from "react";
import { sortingContext } from "../Context";
import "./index.css";

const Index = (props) => {
  // const {onChangeSort}=props
  // const initalValues = {
  //   price: "",
  //   name: "",
  // };
  // const [sort, setSort] = useState(initalValues);
  // const [sort1, setSort1] = useState(initalValues);

  // useEffect(()=>{
  //   setSort1(sort)
  //   onChangeSort(sort)
  // },[sort])
  const { setSort } = useContext(sortingContext);
  //console.log(sortValue);
  function changeSort(event) {
    const { name, value } = event.target;
    //console.log(name,sort);
    setSort((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center ">
        <h4 className="mb-0 pb-0">Filters</h4>
        <i className="bi bi-filter ms-2 fs-2"></i>
      </div>

      <hr />

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="ASC"
          onChange={changeSort}
          name="price"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Low Price
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="DESC"
          onChange={changeSort}
          name="price"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          High Price
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="ASC"
          onChange={changeSort}
          name="name"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Name Asc
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="DESC"
          onChange={changeSort}
          name="name"
          id="flexRadioDefault4"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault4">
          Name Desc
        </label>
      </div>
    </div>
  );
};

export default Index;
