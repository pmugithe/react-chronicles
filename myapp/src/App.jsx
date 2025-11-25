import React from 'react'
function App() {

  return (
    // Using React.Fragment to avoid adding extra nodes to the DOM
    // it lets you group a list of children without adding extra nodes to the Output DOM.
    // SYNTAX: <React.Fragment>...</React.Fragment> or shorthand: <>...</>
    // React Fragment shorthand.
    <>  
      <h1>Hello, World!</h1>
      <h3>Welcome to Vite + React</h3>
    </> // End of React Fragment shorthand
  )
}

export default App
