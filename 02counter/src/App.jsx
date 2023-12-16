import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removedValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Counter Project </h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removedValue}>Removed Value</button>
    </>
  );
}

export default App;
