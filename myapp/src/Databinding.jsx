// Creating a React component and it should start with a capital letter.
// Components are reusable pieces of UI that can be nested, managed, and handled independently.
// They can be defined as JavaScript functions or classes.
// This component named 'App' returns JSX to render a simple greeting message.

// Two types of Components:
// 1. Functional Components: These are JavaScript functions that return JSX.
// 2. Class Components: These are ES6 classes that extend from React.Component and have a render method that returns JSX.

// In this example, we are using a Functional Component.
function Databinding() {

  return (
    <>
    <div>
      <h2>Data Binding in React</h2>
      <ol>
        <h2>Key Points <strong> & Definition:</strong></h2>
        <ul>
          Data binding is the process that establishes a connection between the application UI and business logic.
        </ul>
      </ol>
      <ol>
        
          <strong>Types of Data Binding in React:</strong>
        <ul typeof="A">
          React primarily uses one-way data binding, where data flows from parent to child components via props.
        </ul>
      </ol>
      <ol>
        <h4>
          <strong>Explanation:</strong>
        </h4>
        <ul typeof="A"  >
            <p>In React, data binding is unidirectional, meaning data flows from parent to child components via props.</p>

      <item>This ensures a predictable data flow and makes the application easier to debug and maintain.</item>
      <item>React also supports two-way data binding through controlled components, where the component's state is the <span>single source of truth for form elements.</span></item>
      <item>Overall, React's data binding approach enhances performance and provides a clear structure for managing data within applications.</item>

        </ul>
      </ol>

    </div>
    </>
  )
}

export default Databinding
