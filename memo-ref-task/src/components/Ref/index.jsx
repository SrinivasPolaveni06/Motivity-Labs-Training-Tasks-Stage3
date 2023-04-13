import React from "react";
import { useRef } from "react";

const Index = () => {
  // create a ref
  //The useRef Hook allows you to persist values between renders.
  //   It can be used to store a mutable value that does not cause a re-render when updated.

  //   useRef() only returns one item. It returns an Object called current.

  // When we initialize useRef we set the initial value: useRef(0).

  // It's like doing this: const count = {current: 0}. We can access the count by using count.current.
  const counter = useRef(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    counter.current = counter.current + 1;
    console.log(counter.current);
  };

  // It can be used to access a DOM element directly.
  //In React, we can add a ref attribute to an element to access it directly in the DOM.
  const inputElement = useRef();
  const pargraphElement = useRef();
  const focusInput = () => {
    //inputElement.current.focus();
    pargraphElement.current.innerText = inputElement.current.value;
  };

  return (
    <div className="text-center">
       <h2 className="m-5">Welcome to useMemo Practice</h2>
      <h3>Value: {counter.current}</h3>
      <button onClick={handleIncreaseCounter}>Increase counter</button>
      <div className="mt-5">
        <input type="text" ref={inputElement} />
        <br />
        <button onClick={focusInput} className="mt-3">
          Focus Input
        </button>
        <h3 ref={pargraphElement}></h3>
      </div>
    </div>
  );
};

export default Index;
