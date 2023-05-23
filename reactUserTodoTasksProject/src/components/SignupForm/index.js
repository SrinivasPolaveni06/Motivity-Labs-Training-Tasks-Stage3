import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Index = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialValues);

  const [ConfirmPswd, setConfirmPswd] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onChangeUserData(event) {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  }

  function onConfirmPswd(event) {
    setConfirmPswd(event.target.value);
  }

  function onSubmitFOrm(event) {
    //console.log(userData);
    if (ConfirmPswd !== userData.password) {
      setError("Password is not matched, Please Enter Correct Password");
    } else {
      //setError("");
      fetch("http://localhost:3006/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setError("");
          navigate("/login");
        })
        .catch(err => {
          //console.log(err);
          setError("User already Exists");
        });
    }
    event.preventDefault();
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center login-container">
      <h3 className="my-4">
        <b>Signup Form </b>
      </h3>
      <form
        className="d-flex flex-column "
        onSubmit={(event) => onSubmitFOrm(event)}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          required
          name="name"
          value={userData.name}
          onChange={onChangeUserData}
          variant="outlined"
          className="my-2 login"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          name="email"
          required
          value={userData.email}
          onChange={onChangeUserData}
          variant="outlined"
          className="my-2 login"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          name="password"
          required
          value={userData.password}
          onChange={onChangeUserData}
          variant="outlined"
          className="my-2 login"
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          type="password"
          required
          value={ConfirmPswd}
          onChange={onConfirmPswd}
          variant="outlined"
          className="my-2 login"
        />
        {/* <FormControlLabel control={<Checkbox />} label="Remember Password" /> */}
        <Button variant="contained" className="my-3" type="submit">
          SignUp
        </Button>
        <p className="text-danger my-3">{error}</p>
        <p>
          Already have an account? <NavLink to="/login">SignIn</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Index;
