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
      <h1 className="cocktailName lead">
        {" "}
        <span>{nameOrLoadingDisplay}</span>
      </h1>
      {/* conditional render for border of img; if image is loaded into state then display; if not then do nothing */}
      {cocktail.strDrinkThumb ? (
        <img
          alt="Unavailable"
          className="cocktailImg"
          src={cocktail.strDrinkThumb}
        />
      ) : null}
      <div className="cocktailIngredientsContainer">
        {ingredients.map(drinkingredients => (
          <IngredientsList key={cocktail.id} ingredients={drinkingredients} />
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
