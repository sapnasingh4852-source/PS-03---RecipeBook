import React from "react";
import { Link } from "react-router";

function Home({ recipes }) {
  const vegCount = recipes.filter((recipe) => recipe.type === "Veg").length;
  const favouriteCount = recipes.filter((recipe) => recipe.isFavourite).length;

  return (
    <div className="page">
      <h1>Welcome to Recipe Book</h1>

      <p className="intro">
        Browse tasty recipes from different cuisines, open any recipe to see its
        ingredients and save the ones you like in your favourites.
      </p>

      <div className="stats">
        <div className="stat-box">
          <h3>{recipes.length}</h3>
          <p>Total Recipes</p>
        </div>

        <div className="stat-box">
          <h3>{vegCount}</h3>
          <p>Veg Recipes</p>
        </div>

        <div className="stat-box">
          <h3>{favouriteCount}</h3>
          <p>Favourite Recipes</p>
        </div>
      </div>

      <Link className="browse-btn" to="/recipes">
        Browse Recipes
      </Link>
    </div>
  );
}

export default Home;
