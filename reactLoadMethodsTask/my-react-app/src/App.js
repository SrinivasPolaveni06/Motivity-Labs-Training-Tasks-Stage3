//import logo from './logo.svg';
import "./App.css";
import lodash from "lodash";

function App() {

  //
  //
  //
  
  let array1 = [4, 2, 3, 1, 4, 2];

  //1) Using lodash.findIndex
  let index = lodash.findIndex(
    array1,
    (e) => {
      return e === 1;
    },
    0
  );

  // Print original Array
  console.log("original Array: ", array1);

  // Printing the index
  console.log("index: ", index);

  //
  //
  //
  //

  //2) 'uniq' The Lodash uniq method creates an array without duplicate values.
  let y = [
    "apple",
    "banana",
    "banana",
    "chikoo",
    "apple",
    "Elderberry",
    "DamsonDate",
    "guava",
    "guava",
    "Damson Date",
    "apple",
    "DamsonDate",
  ];

  // Use of _.uniq()
  // method

  let uniqueList = lodash.uniq(y);

  // Printing the output
  console.log(uniqueList);

  //
  //
  //
  //

  //3) pull() method is used to remove all the given values from a given array

  let ar = [1, 2, 3, 1, 3, 4, 1, 5];

  let value = lodash.pull(ar, 1, 5);

  console.log(value);

  //
  //
  //
  //

  //4) find() method in lodash is used to locate objects in an array that meet a set of requirements. This method loops through every element in the collection and returns the first element for which the callback returns true.
  //syntax: lodash.find(collection, predicate, fromIndex)

  let x = [-1, 29, 7, 10, 13, 15];

  let result = lodash.find(
    x,
    function (n) {
      if (n > 10) {
        return true;
      }
    },
    2
  ); //we will find the first number in the list which is greater than 10 but start searching from index 2.
  console.log(result);

  //
  //
  //
  //

  //5) The _.filter() method iterates over elements of collection, returning an array of all elements predicate returns true

  var users = [
    { user: "luv", salary: 36000, active: true },
    { user: "kush", salary: 40000, active: false },
  ];

  // Using the _.filter() method
  let filtered_array = lodash.filter(users, function (o) {
    return !o.active;
  });

  // Printing the output
  console.log(filtered_array);

  //
  //
  //
  //

  //6) The difference() function in Lodash takes two arrays, and returns an array containing all the values in the first array that are not in the second array

  // Original array
  let array = ["a", 2, 3];

  // Values to be removed from
  // the original array
  let values = [2, 3];
  let newArray = lodash.difference(array, values);
  console.log("Before: ", array);

  // Printing array
  console.log("After: ", newArray);
  //
  //
  //
  //
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
