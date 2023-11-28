import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const name = "Kaoutar";
  return (
    <>
      <h1>{text || name}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
