// function App() {
//   return (
//     <div className="App">
//       <h1>React Fundamentals</h1>
//     </div>
//   );
// }

// export default App;

// We have created a simple React component called App. This component returns a div containing an h1 element with the text "React Fundamentals". The component is then exported as the default export of the module, allowing it to be imported and used in other parts of the application.

//Understanding JSX
// JSX is a syntax that allows us to write HTML-like markup inside react components. 

//For example: 
function App() {
  const name = "React Fundamentals";
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2> Learning React </h2>
    </div>
  );
}

export default App;

//The {username} expression insert the variable into the UI. 


//Remember these rules: 
// 1. Components must start with a capital letter.
// 2. Return a single parent element (or a fragment). 
// 3. Use className instead of HTML's class attribute.
// 4. Close JSX elements properly (e.g., <img />, <input />).
// 5. Use curly braces {} to embed JavaScript expressions within JSX.

//