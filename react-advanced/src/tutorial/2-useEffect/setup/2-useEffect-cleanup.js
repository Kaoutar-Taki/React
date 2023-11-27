import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerHeight);
  const checkSize = () => {
    setSize(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
