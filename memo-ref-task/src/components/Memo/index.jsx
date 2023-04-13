import React from "react";
import { useState, useMemo } from "react";
import { squareNum } from "../SquareNum";
const Index = () => {
  const [number, setNumber] = useState(0);
  // Using useMemo
  //The useMemo Hook only runs when one of its dependencies update.

  //This can improve performance.
  //useMemo returns a memoized value.
  // const squaredNum = useMemo(() => {
  //   return squareNum(number);
  // }, [number]);

  const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    console.log("Count Triggered");
    setCounter(counter + 1);
  };
  return (
    <div>
      <div className="App">
        <h2 className="m-5">Welcome to useMemo Practice</h2>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={onChangeHandler}
        ></input>

        <div className="mb-5 mt-1">OUTPUT: {squaredNum}</div>
        <button className="m-1" onClick={counterHander}>
          Counter ++
        </button>
        <div>Counter : {counter}</div>
      </div>
    </div>
  );
};

export default Index;
