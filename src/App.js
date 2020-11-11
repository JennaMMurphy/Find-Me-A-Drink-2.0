import React, { useState } from "react";
import "./App.css";
import RandomCocktailDisplay from "./randomCocktailDisplay";
import ModalComp from "./Modal.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlcholicDrinks, setShowAlcholicDrinks] = useState(true);

  //#region fetchCocktail
  const fetchCocktail = () => {
    setIsLoading(true);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((result) => {
          let drink = result.drinks[0];
          let tempArr = [];

          if ( drink.strAlcoholic === "Alcoholic" && !showAlcholicDrinks ){
            fetchCocktail();
            return;
          }

          for (let i = 0; i <= 15; i++) {
            let ingredient = drink["strIngredient" + i];
            let measurement = drink["strMeasure" + i];

            if (ingredient && measurement)
              tempArr.push(`${ingredient} ${measurement}`);
          }
          setIngredients(tempArr);
          setCocktail(drink);
          setIsLoading(false);
      });
  };
  //#endregion

  return (
    <>
      <div className="backgroundImg" >
        <ModalComp />
        <div className="nonAlcohlicSwitchContainer">
          <span>Don't show alcoholic drinks</span>
          <label className="switch">
            <input 
              type="checkbox" 
              onChange={()=>setShowAlcholicDrinks(!showAlcholicDrinks)}>
            </input>
            <span className="slider round"></span>
          </label>
        </div>
        <RandomCocktailDisplay
          isLoading={isLoading}
          cocktail={cocktail}
          ingredients={ingredients}
          fetchCocktail={fetchCocktail}
        />
      </div>
    </>
  );
}

export default App;
