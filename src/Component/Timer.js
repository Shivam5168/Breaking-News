import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
      setName(`Value = ${count + 100}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <h1>I've rendered {count} times!</h1>
      <h2>Add: {name}</h2>
    </div>
  );
}
export default Timer;
