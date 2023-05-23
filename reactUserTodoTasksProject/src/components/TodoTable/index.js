import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
//import { environmentVariable } from "../../components/Environment";
import TodoItem from "../../components/TodoItem";

import { TablePagination } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";


const Index = () => {
  const [todosList, setData] = useState([]);
  
  const [searchingData, setSearchingData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  useEffect(() => {
    //dispatch(getTodosList());
    getTodosData();
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function onSearchUsers(event) {
    const text = event.target.value;
    
    usersFiltering(text);
  }

  function usersFiltering(text) {
    
    const searchedDataList = searchingData.filter(
      (eachUser) =>
        eachUser.title.toLowerCase().includes(text.toLowerCase()) === true
    );
    if (searchedDataList.length <= 5) {
      setData(searchedDataList);
      setRowsPerPage(5);
      setPage(0);
    } else {
      setData(searchedDataList);
    }
  }

  function getTodosData() {
    fetch("http://localhost:3006/todo/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        //localStorage.setItem("userToken", response.token);

        setData(response);
        setSearchingData(response);
      })
      .catch((err) => {
        console.log(err);
        //setError("User already Exists");
      });
  }

  
  return (
    <Container>
      <Container className="mt-5 d-flex justify-content-end">
       
      </Container>
      <Container className="mt-3 mb-3 d-flex justify-content-between">
        <Paper
          component="form"
          sx={{
            p: "1px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          className=" bg-secondary "
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by title"
            inputProps={{ "aria-label": "search users" }}
            onChange={(event) => onSearchUsers(event)}
            className="text-white"
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon className="text-white" />
          </IconButton>
        </Paper>
        <div>
          
        </div>
      </Container>

      <div className="print">
        <Table
          bordered
          hover
          
        >
          <thead className="text-center">
            <tr>
              <th>Id</th>
              <th>Titles</th>
              <th>Completed</th>
              <th>Target Date</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          {todosList.length > 0 ? (
            <tbody className="text-center">
              {todosList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((eachTodo) => (
                  <TodoItem
                    key={eachTodo._id}
                    eachTodo={eachTodo}
                    relode={getTodosData}
                  />
                ))}
            </tbody>
          ) : (
            <tbody className="text-center">
              <tr>
                <td className={`not-found `} colSpan="7">
                  No Data Found
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>

      <TablePagination
        rowsPerPageOptions={[5, 15, 100]}
        component="div"
        count={todosList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default Index;
