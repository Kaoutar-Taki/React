import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const increaseLater = () => {
    setTimeout(() => {
      setCounter((prev) => {
        return prev + 1;
      });
    }, 3000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{counter}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setCounter(counter - 1)}
        >
          decrease
        </button>
        <button type="button" className="btn" onClick={() => setCounter(0)}>
          increase
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setCounter(counter + 1)}
        >
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button type="button" className="btn" onClick={increaseLater}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
