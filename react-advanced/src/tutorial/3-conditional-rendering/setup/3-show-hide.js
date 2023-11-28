import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [textHide, setTextHide] = useState("salse");

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const chowHide = () => {
    setTextHide(!textHide);
  };

  return (
    <>
      <button type="button" className="btn" onClick={chowHide}>
        {textHide ? "Show" : "Hide"}
      </button>
      {!textHide && (
        <div style={{ marginTop: "2rem" }}>
          <h1>window</h1>
          <h2>Size : {size}</h2>
        </div>
      )}
    </>
  );
};

export default ShowHide;
