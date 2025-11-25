// Creating a React component and it should start with a capital letter.
// Components are reusable pieces of UI that can be nested, managed, and handled independently.
// They can be defined as JavaScript functions or classes.
// This component named 'App' returns JSX to render a simple greeting message.

// Two types of Components:
// 1. Functional Components: These are JavaScript functions that return JSX.
// 2. Class Components: These are ES6 classes that extend from React.Component and have a render method that returns JSX.

// In this example, we are using a Functional Component.
import { useState } from "react";
function Databinding() {
  const name = "React Developer";
  // we will use state to manage the fullName variable if we want it to be dynamic.
  // Using useState hook to create a state variable 'fullName' with initial value "John Doe"
  // and a function 'setFullName' to update it.
  // Syntax: const [stateVariable, setStateFunction] = useState(initialValue);
  // Here, fullName is the state variable, setFullName is the function to update it, and "John Doe" is the initial value.
  // When the state changes, the component re-renders to reflect the new state.
  // This is an example of one-way data binding in React, where the UI reflects the state.
  const [fullName, setFullName] = useState("John Doe");

  // useState is a Hook that lets you add React state to functional components.
  // When you call useState, it returns an array with two elements:
  // 1. The current state value.
  // 2. A function that lets you update the state.
  
  const handleClick = (e) => {
    e.target.value = "Submitted";
    e.target.style.backgroundColor = "green";

    setTimeout(() => {
      e.target.value = "Submit";
      e.target.disable = true;
      e.target.style.backgroundColor = "blue";
    }, 5000);
    //alert(`Hello, ${name}!`);
  };
  const handleNameChange = (e) => {
    setFullName(e.target.value);
    // Update the state or perform any other logic here
  };

  return (
    <>
      <div>
        <h2>Data Binding in React</h2>
        <ol>
          <h2>
            Key Points <strong> & Definition:</strong>
          </h2>
          <ul>
            Data binding is the process that establishes a connection between
            the application UI and business logic.
          </ul>
        </ol>
        <ol>
          <strong>Types of Data Binding in React:</strong>
          <ul typeof="A">
            React primarily uses one-way data binding, where data flows from
            parent to child components via props.
          </ul>
        </ol>
        <ol>
          <h4>
            <strong>Explanation:</strong>
          </h4>
          <ul typeof="A">
            <p>
              In React, data binding is unidirectional, meaning data flows from
              parent to child components via props.
            </p>
            This one-way data flow helps maintain a clear structure in the
            application. This ensures a predictable data flow and makes the
            application easier to debug and maintain. React also supports
            two-way data binding through controlled components, where the
            component's state is the{" "}
            <span>single source of truth for form elements.</span>
            Overall, React's data binding approach enhances performance and
            provides a clear structure for managing data within applications.
          </ul>
        </ol>
      </div>
      <div>
        <h3>Example of Data Binding in React:</h3>
        <p>Hello, {name}!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={fullName}
          onChange={(e) => handleNameChange(e)}
        />
        <input type="button" value="Submit" onClick={(e) => handleClick(e)} />

        <p>
          <strong>Current Name:</strong> {fullName}
        </p>
      </div>
    </>
  );
}

export default Databinding;
