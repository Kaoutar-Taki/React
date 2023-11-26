import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="book-list">
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<BookList />);
