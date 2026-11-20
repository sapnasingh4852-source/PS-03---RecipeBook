import React from "react";
import { Link } from "react-router";

function RecipeCard({ recipe, isFavourite, onToggleFavourite }) {
  return (
    <div className="recipe-card">
      <h3>
        {recipe.emoji} {recipe.name}
      </h3>

      <div className="badges">
        <span className={recipe.type === "Veg" ? "badge veg" : "badge nonveg"}>
          {recipe.type}
        </span>

        {recipe.cookingTime <= 20 && (
          <span className="badge quick">Quick</span>
        )}
      </div>

      <p className="card-info">
        {recipe.cuisine} • {recipe.cookingTime} min • {recipe.difficulty}
      </p>

      <div className="card-actions">
        <button onClick={() => onToggleFavourite(recipe.id)}>
          {isFavourite ? "❤ Remove from Favourites" : "♡ Add to Favourites"}
        </button>

        <Link to={`/recipes/${recipe.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default RecipeCard;
