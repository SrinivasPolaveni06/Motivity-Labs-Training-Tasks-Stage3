import React, { Component } from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
//import { useState, useEffect } from "react";
//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { createBrowserHistory } from "history";
import { redirect } from "react-router-dom";
import "./index.css";

// const initialValues = {
//   email: "",
//   password: "",
// };

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  componentDidMount() {
    this.getToken();
  }

  getToken() {
    let Token = localStorage.getItem("userToken");
    if (Token) {
      //navigate("/");
    }
  }
  onChangeUserData = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState((prevState) => ({ ...prevState, [name]: value }));
    //setUserData((prevState) => ({ ...prevState, [name]: value }));
  };
  onSubmitFOrm = (event) => {
    //console.log(userData);
    const { email, password } = this.state;
    //const { history } = this.props;
    //let history = useHistory();

    //const history = createBrowserHistory();

    const userData = { email, password };
    fetch("http://localhost:3006/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(status);
        if (response.status === 200) {
          localStorage.setItem("userToken", response.token);

          localStorage.setItem("loginUser", JSON.stringify(response.data));
          //navigate("/");
          //history.replace("/");
          redirect("/")
          // history.replace({
          //   pathname: "/",
          //   state: {
          //     Key: response.data,
          //   },
          // });
          //setError("");
          this.setState((prevState) => ({
            ...prevState,
            error: response.message,
          }));
          window.history.pushState({}, undefined, "/");
        } else {
          this.setState((prevState) => ({
            ...prevState,
            error: response.message,
          }));
        }
      })
      .catch((err) => {
        console.log(err);
        //setError("User Not Registered");
        this.setState((prevState) => ({
          ...prevState,
          error: err.message,
        }));
      });
    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <div className="d-flex flex-column align-items-center justify-content-center login-container">
          <h3 className="my-4">
            <b>Login Form </b>
          </h3>
          <form
            className="d-flex flex-column "
            onSubmit={(event) => this.onSubmitFOrm(event)}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              name="email"
              onChange={this.onChangeUserData}
              variant="outlined"
              required
              className="my-2 login"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              name="password"
              onChange={this.onChangeUserData}
              required
              variant="outlined"
              className="my-2 login"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Password"
            />
            <Button variant="contained" className="my-3" type="submit">
              Login
            </Button>
            <p className="text-danger my-3">{error}</p>
            <p>
              Don't have an account? <NavLink to="/signup">SignUp</NavLink>
            </p>
          </form>
        </div>
      </>
    );
  }
}

// const Index = () => {
//   //const navigate = useNavigate();
//   // useEffect(() => {
//   //   getToken();
//   // });

//   // function getToken() {
//   //   let Token = localStorage.getItem("userToken");
//   //   if (Token) {
//   //     navigate("/");
//   //   }
//   // }
//   // const initialValues = {
//   //   email: "",
//   //   password: "",
//   // };
//   // const [userData, setUserData] = useState(initialValues);
//   // const [error, setError] = useState("");

//   function onChangeUserData(event) {
//     const { name, value } = event.target;
//     setUserData((prevState) => ({ ...prevState, [name]: value }));
//   }
//   function onSubmitFOrm(event) {
//     console.log(userData);
//     fetch("http://localhost:3006/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("userToken", response.token);

//         localStorage.setItem("loginUser", JSON.stringify(response.data));
//         navigate("/");
//         setError("");
//       })
//       .catch((res) => {
//         console.log(res);
//         setError("User Not Registered");
//       });
//     event.preventDefault();
//   }
//   return (
//     <div className="d-flex flex-column align-items-center justify-content-center login-container">
//       <h3 className="my-4">
//         <b>Login Form </b>
//       </h3>
//       <form
//         className="d-flex flex-column "
//         onSubmit={(event) => onSubmitFOrm(event)}
//       >
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           type="email"
//           name="email"
//           onChange={onChangeUserData}
//           variant="outlined"
//           required
//           className="my-2 login"
//         />
//         <TextField
//           id="outlined-basic"
//           label="Password"
//           type="password"
//           name="password"
//           onChange={onChangeUserData}
//           required
//           variant="outlined"
//           className="my-2 login"
//         />
//         <FormControlLabel control={<Checkbox />} label="Remember Password" />
//         <Button variant="contained" className="my-3" type="submit">
//           Login
//         </Button>
//         <p className="text-danger my-3">{error}</p>
//         <p>
//           Don't have an account? <NavLink to="/signup">SignUp</NavLink>
//         </p>
//       </form>
//     </div>
//   );
// };

export default LoginForm;
