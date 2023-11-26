import React from "react";

const Book = (props) => {
  const { img, Title, Genre, Author, Country, Price } = props;
  const clickHandler = () => {
    console.log("clickHandler");
  };
  const mouseOverHandler = () => {
    console.log("mouseOverHandler");
  };
  return (
    <article className="book" onMouseOver={mouseOverHandler}>
      <img src={img} alt="book" width={250} height={300} />
      <h2>{Title}</h2>({Genre})<h4>{Author}</h4>
      <h5>{Country.toLowerCase()}</h5>
      <p>{Price} $</p>
      <button type="button" onClick={clickHandler}>
        Add to Cart
      </button>
    </article>
  );
};

export default Book;
