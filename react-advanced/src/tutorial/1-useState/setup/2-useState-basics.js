import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, settitle] = useState("random title");
  const handleChangetitle = () => {
    return title === "random title"
      ? settitle("hello people")
      : settitle("random title");
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleChangetitle}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
