//import logo from './logo.svg';
import "./App.css";
//import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import Home from "./pages/Home/index";
import ProtectedRoute from "./components/ProtectedRoute";
import TodosTable from "./components/TodoTable";
import CraeteTodo from "./pages/CreateTodo";
//import { useState, useEffect } from "react";
import SaveImages from "./pages/SaveImages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}>
            <Route index element={<TodosTable />} />
            <Route path="todo" element={<CraeteTodo />} />
            <Route path="savefile" element={<SaveImages />} />
          </Route>
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/" element={<Sidebar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
