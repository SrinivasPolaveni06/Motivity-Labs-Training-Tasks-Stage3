import React,{Component} from "react";
import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

class TodoItem extends Component{
  state={verify:false}
  onEdit() {
   // navigate(`/todo/${eachTodo.id}`);
   console.log("asdfghjkl");
  }

  onDelete(id) {
    console.log(id);
    this.setState((prevState)=>({...prevState,verify:!prevState.verify}))
    //setVerify(!verify);
  }

  render(){
    const { eachTodo, stylename } = this.props;
    const textColor = eachTodo.completed ? "textSuccess" : "";
    return(
      <>
      <tr className={`${textColor} ${stylename}`}>
        <td className={stylename}>{eachTodo._id.charAt((eachTodo._id.length)-1)}</td>
        <td className={stylename}>{eachTodo.title}</td>
        <td className={stylename}>
          {eachTodo.status }
        </td>
        <td className={stylename}>{eachTodo.target}</td>
        <td className={stylename}>{eachTodo.createdAt}</td>
        <td className={stylename}>{eachTodo.updatedAt}</td>

        <td className={stylename}>
          <Button variant="warning" size="sm" onClick={() => this.onEdit()}>
            <i className="bi bi-pencil-fill"></i>
          </Button>
          <Button
            variant="danger"
            size="sm"
            className="ms-2"
            onClick={() => this.onDelete(eachTodo.id)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
      </>
    )
  }

}


export default TodoItem;
