import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
}
const Book = () => {
  const Country = "Canada";
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
      <h5>{Country.toLowerCase()}</h5>
    </article>
  );
};

const Image = () => <img src="img/book.jpg" alt="" width={200} height={300} />;
const Title = () => <h2>Milk and Honey</h2>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Rupi Kaur
  </h4>
);

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
