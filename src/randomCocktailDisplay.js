import React from "react";
import IngredientsList from "./Ingredients.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function RandomCocktailDisplay({
  isLoading,
  cocktail,
  ingredients,
  fetchCocktail,
}) {
  //conditional render of loading while fetch is being handled. after loaded it displays name of cocktail
  const nameOrLoadingDisplay = isLoading ? "Loading..." : cocktail.strDrink;
  return (
    <div className="container"> 
      {cocktail.strDrink ? (      
        <h1 className="cocktailName lead">
          <span>{nameOrLoadingDisplay}</span>
        </h1>
      ) : null}
      {/* conditional render for border of img; if image is loaded into state then display; if not then do nothing */}
      {cocktail.strDrinkThumb ? (
        <img
          alt="Unavailable"
          className="cocktailImg"
          src={cocktail.strDrinkThumb}
        />
      ) : null}
      <div className="cocktailIngredientsContainer">
        {ingredients.map((drinkIngredients, i) => (
          <IngredientsList key={i} ingredients={drinkIngredients} />
        ))}
      </div>
      <button
        type="button"
        className="btn btn-warning button"
        onClick={fetchCocktail}
      >
        Find a random cocktail
      </button>
    </div>
  );
}

export default RandomCocktailDisplay;
