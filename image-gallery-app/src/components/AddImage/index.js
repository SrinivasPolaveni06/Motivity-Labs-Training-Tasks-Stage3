import * as React from "react";
//import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// //import Checkbox from "@mui/material/Checkbox";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
// //import { useNavigate } from "react-router-dom";
// import moment from "moment";

const Index = () => {
  const initialValues = {
    title: "",
    description: "",
    price: "",
    img_url: "",
    category: "",
    original_price: "",
  };
  const [value, setValue] = useState(initialValues);
  const [data, setData] = useState([]);
  //const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    fetch("http://localhost:3004/gallery/")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        console.log(response);
        //setError("");
        //navigate("/");
      })
      .catch((err) => {
        console.log(err);
        //setError("User already Exists");
      });
  }, []);

  // function onFormSubmit(event) {
  //   const createDate = moment(new Date()).format("MM/DD/YYYY");
  //   //const targetDate = moment(value.target).format("MM/DD/YYYY");

  //   const TotalData = {
  //     ...value,
  //     createdAt: createDate,
  //   };
  //   console.log(TotalData);
  //   fetch("http://localhost:3005/product/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       //Authorization: "Bearer " + localStorage.getItem("userToken"),
  //     },
  //     body: JSON.stringify(TotalData),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       //setError("");
  //       //navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       //setError("User already Exists");
  //     });
  //   event.preventDefault();
  //   //console.log(value);
  // }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="my-4">
        <b>Product Creation Form </b>
      </h3>
      {/* <form
        className="d-flex flex-column "
        onSubmit={(event) => onFormSubmit(event)}
      >
        <TextField
          id="outlined-basic"
          label="Category Name"
          name="category"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.category}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Product Name"
          name="title"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.title}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Product Description"
          name="description"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.description}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Image Url"
          name="img_url"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.img_url}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Product Price"
          name="price"
          type="number"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.price}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Product original_price"
          name="original_price"
          type="number"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.original_price}
          onChange={handleChange}
        />

        <button variant="contained" className="my-3" type="submit">
          Create Images
        </button>
      </form> */}
      <div>
        {data.map((eachElement) => (
          <img
            src={`http://localhost:3004/${eachElement.pic}`}
            alt="Images"
            key={eachElement._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
