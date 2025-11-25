import Databinding from './Databinding.jsx';
function App() {
// The App component serves as the root component of the React application.
// We just added a Databinding component to demonstrate data binding concepts in React.
  return (
    // Using React.Fragment to avoid adding extra nodes to the DOM
    // it lets you group a list of children without adding extra nodes to the Output DOM.
    // SYNTAX: <React.Fragment>...</React.Fragment> or shorthand: <>...</>
    // React Fragment shorthand.
    <>  
      <h1>Hello, World!</h1>
      <h3>Welcome to Vite + React</h3>
      <Databinding />
    </> // End of React Fragment shorthand
  )
}

export default App
