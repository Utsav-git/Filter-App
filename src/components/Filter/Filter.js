import React, { useState } from "react";
import { people } from "../../utils/people";
import "./Filter.css";
import Person from "../Person/Person";

const Filter = () => {
  const [isChemist, setChemist] = useState(false);
  const [isMathematician, setMathematician] = useState(false);
  const [isPhysicist, setPhysicist] = useState(false);
  const [isAstrophysicist, setAstrophysicist] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const chemist = people.filter((person) => person.profession === "Chemist");
  const mathematician = people.filter(
    (person) => person.profession === "Mathematician"
  );
  const physicist = people.filter(
    (person) => person.profession === "Physicist"
  );
  const astrophysicist = people.filter(
    (person) => person.profession === "Astrophysicist"
  );

  const mathematicianClick = () => {
    setMathematician(!isMathematician);
    setAstrophysicist(false);
    setPhysicist(false);
    setChemist(false);
  };
  const physicistClick = () => {
    setPhysicist(!isPhysicist);
    setAstrophysicist(false);
    setMathematician(false);
    setChemist(false);
  };
  const astrophysicistClick = () => {
    setAstrophysicist(!isAstrophysicist);
    setChemist(false);
    setMathematician(false);
    setPhysicist(false);
  };
  const chemistClick = () => {
    setChemist(!isChemist);
    setAstrophysicist(false);
    setPhysicist(false);
    setMathematician(false);
  };
  const changeMode = () => {
    const App = document.querySelector(".App");
    setDarkMode(!isDarkMode);

    !isDarkMode
      ? App.classList.add("light-mode")
      : App.classList.remove("light-mode");

    const modeButton = document.querySelector(".mode-button");
    App.classList.contains("light-mode")
      ? (modeButton.style.border = `1px solid #000`)
      : (modeButton.style.border = `1px solid #fff`);
  };

  return (
    <>
      <div className="mode-container">
        <p>Change Mode </p>

        <button className="mode-button" onClick={changeMode}>
          💡
        </button>
      </div>
      <div className="filter">
        <h3 className="header">Filter Professors by Professions</h3>

        <div className="button-container">
          <button
            id="mathematician-button"
            className={
              isMathematician ? ` filter-button active` : `filter-button`
            }
            onClick={mathematicianClick}
          >
            Mathematician
          </button>
          <button
            id="physicist-button"
            className={isPhysicist ? ` filter-button active` : `filter-button`}
            onClick={physicistClick}
          >
            Physicist
          </button>
          <button
            id="astrophysicist-button"
            className={
              isAstrophysicist ? ` filter-button active` : `filter-button`
            }
            onClick={astrophysicistClick}
          >
            Astrophysicist
          </button>
          <button
            id="chemist-button"
            className={isChemist ? ` filter-button active` : `filter-button`}
            onClick={chemistClick}
          >
            Chemist
          </button>
        </div>
        <div className="people-container">
          <Person
            person={
              isChemist
                ? chemist
                : isAstrophysicist
                ? astrophysicist
                : isMathematician
                ? mathematician
                : isPhysicist
                ? physicist
                : people
            }
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
