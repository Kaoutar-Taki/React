import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <>
      <div onClick={() => console.log("clicked")}>
        <h1 className="">Hello World</h1>
        <Person />
        <p>This is my message</p>
        <ul>
          <li>
            <a href="www.home.com">Home</a>
          </li>
          <img src="" alt="" />
          <input type="text" name="" id="" />
        </ul>
      </div>
    </>
  );
}
const Person = () => <h2>Kaoutar Taki</h2>;

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

ReactDom.render(<Greeting />, document.getElementById("root"));
