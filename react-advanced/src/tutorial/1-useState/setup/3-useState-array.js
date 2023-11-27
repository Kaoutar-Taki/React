import { React, useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setpeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, city } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <h5>{age} old</h5>({city})
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setpeople([])}>
        Clear items
      </button>
      <button type="button" className="btn" onClick={() => setpeople(data)}>
        Restor items
      </button>
    </>
  );
};

export default UseStateArray;
