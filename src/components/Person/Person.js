import React from "react";
import "./Person.css";

const Person = (props) => {
  const { person } = props;
  return person.map((p) => {
    return (
      <div key={p.id} className="person-container">
        <h4 className="person-name">{p.name}</h4>
        <p className="person-profession">{p.profession}</p>
      </div>
    );
  });
};

export default Person;
