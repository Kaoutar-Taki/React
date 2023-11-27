import React, { useState } from "react";

const UseStateObject = () => {
  const name = "Kaoutar";
  const age = 20;
  const msg = "Random Message";

  const [person, setPerson] = useState({ name, age, msg });
  const chageMsg = () => {
    setPerson({ ...person, msg: "Hello World" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h2>{person.age}</h2>
      <h4>{person.msg}</h4>
      <button className="btn" onClick={chageMsg}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
