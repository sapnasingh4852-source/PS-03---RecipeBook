import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  let visibleRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  if (typeFilter !== "All") {
    visibleRecipes = visibleRecipes.filter((recipe) => recipe.type === typeFilter);
  }

  if (sortOrder === "low") {
    visibleRecipes = [...visibleRecipes].sort((a, b) => a.cookingTime - b.cookingTime);
  }

  if (sortOrder === "high") {
    visibleRecipes = [...visibleRecipes].sort((a, b) => b.cookingTime - a.cookingTime);
  }

  return (
    <div className="page">
      <h1>All Recipes</h1>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="default">Sort by cooking time</option>
          <option value="low">Cooking Time: Low → High</option>
          <option value="high">Cooking Time: High → Low</option>
        </select>
      </div>

      {visibleRecipes.length === 0 ? (
        <p className="empty-text">No recipes found</p>
      ) : (
        <div className="card-grid">
          {visibleRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={recipe.isFavourite}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Recipes;
