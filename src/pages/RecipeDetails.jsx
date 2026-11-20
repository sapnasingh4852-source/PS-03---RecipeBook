import React from "react";
import { useParams, Link } from "react-router";

function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <div className="page">
        <h1>Recipe Not Found</h1>
        <Link to="/recipes">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>
        {recipe.emoji} {recipe.name}
      </h1>

      <div className="badges">
        <span className={recipe.type === "Veg" ? "badge veg" : "badge nonveg"}>
          {recipe.type}
        </span>

        {recipe.cookingTime <= 20 && (
          <span className="badge quick">Quick</span>
        )}
      </div>

      <div className="details-box">
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Cooking Time:</strong> {recipe.cookingTime} min
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Type:</strong> {recipe.type}
        </p>
      </div>

      <h2>{recipe.ingredients.length} ingredients</h2>

      <ul className="ingredients">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <Link to="/recipes">Back to Recipes</Link>
    </div>
  );
}

export default RecipeDetails;
