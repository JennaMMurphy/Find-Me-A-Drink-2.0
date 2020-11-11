import React, { useState } from "react";
import "./App.css";
import RandomCocktailDisplay from "./randomCocktailDisplay";
import ModalComp from "./Modal.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //#region fetchCocktail
  //fetch cocktail handles fectch to API.
  //implements logic that filters out non-alcoholic drinks
  const fetchCocktail = () => {
    setIsLoading(true);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((result) => {
        if (result.drinks[0].strAlcoholic === "Alcoholic") {
          let tempArr = [];
          for (let i = 0; i <= 15; i++) {
            if (
              //this is checking if there is a truthy value for ingredients and measurements
              //because the API has anywhere from 1-15 empty values that I dont want to display
              result.drinks[0]["strIngredient" + i] &&
              result.drinks[0]["strMeasure" + i]
            )
              tempArr.push(
                result.drinks[0]["strIngredient" + i] +
                  " " +
                  result.drinks[0]["strMeasure" + i]
              );
          }
          setIngredients(tempArr);
          setCocktail(result.drinks[0]);
        } else {
          //runs function again if drink is not alcoholic
          fetchCocktail();
        }
        setIsLoading(false);
      });
  };

  //#endregion

  return (
    <>
      <div className="backgroundImg">
        <ModalComp />
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
