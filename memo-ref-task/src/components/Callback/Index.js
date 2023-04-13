import React from "react";
import { useState, useCallback } from "react";
import Todos from "../Todo";
const Index = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  //The React useCallback Hook returns a memoized callback function.
  //   This allows us to isolate resource intensive functions so that they will not automatically run on every render.

  // The useCallback Hook only runs when one of its dependencies update.

  // This can improve performance.
  //One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  console.log("Parent Render");
  return (
    <>
      <div className="text-center">
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  );
};

export default Index;
