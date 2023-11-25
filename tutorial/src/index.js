import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    Title: "The Silent Patient",
    Author: "Alex Michaelides",
    Genre: "Psychological Thriller",
    Price: 25.0,
    Country: "United States",
    img: "img/book5.jpg",
  },
  {
    id: 2,
    Title: "Educated",
    Author: "Tara Westover",
    Genre: "Memoir",
    Price: 18.99,
    Country: "United States",
    img: "img/book3.jpg",
  },
  {
    id: 3,
    Title: "Sapiens: A Brief History of Humankind",
    Author: "Yuval Noah Harari",
    Genre: "Non-Fiction",
    Price: 19.99,
    Country: "Israel",
    img: "img/book9.jpg",
  },
  {
    id: 4,
    Title: "Dune",
    Author: "Frank Herbert",
    Genre: "Science Fiction",
    Price: 15.5,
    Country: "United States",
    img: "img/book.jpg",
  },
  {
    id: 5,
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Genre: "Fiction",
    Price: 14.99,
    Country: "United States",
    img: "img/book7.jpg",
  },
  {
    id: 6,
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Genre: "Fiction",
    Price: 12.99,
    Country: "United States",
    img: "img/book6.jpg",
  },
  {
    id: 7,
    Title: "Dune",
    Author: "Frank Herbert",
    Genre: "Science Fiction",
    Price: 18.5,
    Country: "United States",
    img: "img/book2.jpg",
  },
  {
    id: 8,
    Title: "Educated",
    Author: "Tara Westover",
    Genre: "Memoir",
    Price: 14.95,
    Country: "United States",
    img: "img/book5.jpg",
  },
  {
    id: 9,
    Title: "The Da Vinci Code",
    Author: "Dan Brown",
    Genre: "Mystery/Thriller",
    Price: 10.99,
    Country: "United States",
    img: "img/book4.jpg",
  },
  {
    id: 10,
    Title: "Sapiens: A Brief History of Humankind",
    Author: "Yuval Noah Harari",
    Genre: "Non-Fiction",
    Price: 20.0,
    Country: "United Kingdom",
    img: "img/book3.jpg",
  },
  {
    id: 11,
    Title: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    Genre: "Fiction",
    Price: 9.99,
    Country: "United States",
    img: "img/book.jpg",
  },
];
function BookList() {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, Title, Genre, Author, Country, Price } = props;
  return (
    <article className="book">
      <img src={img} alt="" width={250} height={300} />
      <h2>{Title}</h2>({Genre})<h4>{Author}</h4>
      <h5>{Country.toLowerCase()}</h5>
      <p>{Price} $</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

// function Greeting() {
//   return (
//     <>
//       <div onClick={() => console.log("clicked")}>
//         <h1 className="">Hello World</h1>
//         <Person />
//         <p>This is my message</p>
//         <ul>
//           <li>
//             <a href="www.home.com">Home</a>
//           </li>
//           <img src="" alt="" />
//           <input type="text" name="" id="" />
//         </ul>
//       </div>
//     </>
//   );
// }
// const Person = () => <h2>Kaoutar Taki</h2>;

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement('div',{},React.createElement('h2',{},'Hello World'));
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));
