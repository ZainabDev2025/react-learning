import React from "react";

const App = () => {
  const names = ["ujala", "tayyab", "Ali"];
  const loggedin = false;
  return (
    <>
      <div className="mx-auto bg-amber-800">App</div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    {!loggedin ? <h1>hi</h1> : <h1>bye</h1>}
    </>
  );
};

export default App;
