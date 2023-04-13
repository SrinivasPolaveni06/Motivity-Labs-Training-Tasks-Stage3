import React, { useReducer } from "react";

const Index = () => {
  // First render will create the state, and it will
  // persist through future renders
  //useReducer returns an array of 2 elements, similar to the useState hook. The first is the current state, and the second is a dispatch function
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  //   //Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
  //   //You pass a reducer function and an initial value (initial state). Your reducer receives the current state and an action, and returns the new state.
  //   //The second argument to reduce (0 in this case) is the initial value for total
  //   //It's emulate the Redux behavior, but it’s not encouraged.
  return (
    <>
      <div className="text-center mt-5">
        <h4>Sum: {sum}</h4>
        <br />
        <button onClick={() => dispatch(1)}>Add 1</button>
        {/* <button onClick={() => dispatch(1)}>Add 1</button> !You can see how clicking the button dispatches an action with a value of 1, which gets added to the current state, and then the component re-renders with the new (larger!) state */}
      </div>
    </>
  );
};
export default Index;

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Index() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state);
//   //console.log(dispatch)
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }
// export default Index;
