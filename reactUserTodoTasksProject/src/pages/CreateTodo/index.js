import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "./index.css";

const Index = () => {
  const initialValues = {
    title: "",
    status: "incomplete",
    target: "",
  };
  const [value, setValue] = useState(initialValues);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  function onFormSubmit(event) {
    const createDate = moment(new Date()).format("MM/DD/YYYY");
    const targetDate = moment(value.target).format("MM/DD/YYYY");

    const TotalData = {
      ...value,
      target: targetDate,
      createdAt: createDate,
      updatedAt: createDate,
    };
    console.log(TotalData);
    fetch("http://localhost:3006/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      body: JSON.stringify(TotalData),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        //setError("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        //setError("User already Exists");
      });
    event.preventDefault();
    //console.log(value);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="my-4">
        <b>Todo Form </b>
      </h3>
      <form
        className="d-flex flex-column "
        onSubmit={(event) => onFormSubmit(event)}
      >
        <TextField
          id="outlined-basic"
          label="Todo Task Name"
          name="title"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.title}
          onChange={handleChange}
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="status"
            value={value.status}
            onChange={handleChange}
            className="d-flex flex-row my-3"
          >
            <FormControlLabel
              value="incomplete"
              control={<Radio />}
              label="Incomplete"
            />
            <FormControlLabel
              value="done"
              control={<Radio />}
              label="Complete"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Target"
          name="target"
          type="date"
          required
          variant="outlined"
          className="my-2 login"
          focused
          value={value.target}
          onChange={handleChange}
        />

        <Button variant="contained" className="my-3" type="submit">
          Create Task
        </Button>
      </form>
    </div>
  );
};

export default Index;
