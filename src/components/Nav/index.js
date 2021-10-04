import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(){
  const categories = [
    {name: "project1", description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    {name: "project2", description: 'Portraits of people in my life' },
    {name: "project3", description: 'Delicious delicacies' },
    {name: "project4", description: 'Fields, farmhouses, waterfalls, and the beauty of nature'},
  ];
  
  function handleClick() { 
    console.log("click handled")
  }

   return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> Dana Bottoni
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}



export default Nav;