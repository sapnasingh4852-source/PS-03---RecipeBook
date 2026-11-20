import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import recipeData from "./data/recipes";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  function toggleFavourite(id) {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavourite: !recipe.isFavourite }
          : recipe
      )
    );
  }

  const favouriteCount = recipes.filter((recipe) => recipe.isFavourite).length;

  return (
    <BrowserRouter>
      <Navbar favouriteCount={favouriteCount} />

      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />

        <Route
          path="/recipes"
          element={<Recipes recipes={recipes} onToggleFavourite={toggleFavourite} />}
        />

        <Route
          path="/recipes/:id"
          element={<RecipeDetails recipes={recipes} />}
        />

        <Route
          path="/favourites"
          element={<Favourites recipes={recipes} onToggleFavourite={toggleFavourite} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
