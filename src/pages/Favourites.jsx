import React from "react";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

function Favourites({ recipes, onToggleFavourite }) {
  const favouriteRecipes = recipes.filter((recipe) => recipe.isFavourite);

  let totalCookingTime = 0;
  favouriteRecipes.forEach((recipe) => {
    totalCookingTime = totalCookingTime + recipe.cookingTime;
  });

  if (favouriteRecipes.length === 0) {
    return (
      <div className="page">
        <h1>My Favourites</h1>
        <p className="empty-text">No favourites yet</p>
        <Link to="/recipes">Go to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>My Favourites</h1>

      <p className="total-time">
        Total cooking time: {totalCookingTime} min
      </p>

      <div className="card-grid">
        {favouriteRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavourite={recipe.isFavourite}
            onToggleFavourite={onToggleFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
