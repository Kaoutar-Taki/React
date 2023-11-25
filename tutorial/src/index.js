import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="book-list">
      <Book
        Title="The Silent Patient"
        Author="Alex Michaelides"
        Genre="Psychological Thriller"
        Price="25.00"
        Country="United States"
        img={img5}
      />
      <Book
        Title="Educated"
        Author="Tara Westover"
        Genre="Memoir"
        Price="18.99"
        Country="United States"
        img={img3}
      />
      <Book
        Title="Sapiens: A Brief History of Humankind"
        Author="Yuval Noah Harari"
        Genre="Non-Fiction"
        Price="19.99"
        Country="Israel"
        img={img9}
      />
      <Book
        Title="Dune"
        Author="Frank Herbert"
        Genre="Science Fiction"
        Price="15.50"
        Country="United States"
        img={img8}
      />
      <Book
        Title="To Kill a Mockingbird"
        Author="Harper Lee"
        Genre="Fiction"
        Price="14.99"
        Country="United States"
        img={img7}
      />
      <Book
        Title="To Kill a Mockingbird"
        Author="Harper Lee"
        Genre="Fiction"
        Price="12.99"
        Country="United States"
        img={img6}
      />
      <Book
        Title="Dune"
        Author="Frank Herbert"
        Genre="Science Fiction"
        Price="18.50"
        Country="United States"
        img={img2}
      />
      <Book
        Title="Educated"
        Author="Tara Westover"
        Genre="Memoir"
        Price="14.95"
        Country="United States"
        img={img5}
      />
      <Book
        Title="The Da Vinci Code"
        Author="Dan Brown"
        Genre="Mystery/Thriller"
        Price="10.99"
        Country="United States"
        img={img4}
      />
      <Book
        Title="Sapiens: A Brief History of Humankind"
        Author="Yuval Noah Harari"
        Genre="Non-Fiction"
        Price="20.00"
        Country="United Kingdom"
        img={img3}
      />
      <Book
        Title="The Great Gatsby"
        Author="F. Scott Fitzgerald"
        Genre="Fiction"
        Price="9.99"
        Country="United States"
        img={img}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" width={250} height={300} />
      <h2>{props.Title}</h2>({props.Genre})<h4>{props.Author}</h4>
      <h5>{props.Country.toLowerCase()}</h5>
      <p>{props.Price} $</p>
    </article>
  );
};

const img = "img/book.jpg";
const img2 = "img/book2.jpg";
const img3 = "img/book3.jpg";
const img4 = "img/book4.jpg";
const img5 = "img/book5.jpg";
const img6 = "img/book6.jpg";
const img7 = "img/book7.jpg";
const img8 = "img/book8.jpg";
const img9 = "img/book9.jpg";

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
