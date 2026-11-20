# Recipe Book — Mid Sem Phase 2

- **Student Name:** Sapna Singh
- **Roll Number:** 73
- **Problem Statement Number:** P3 — Recipe Book
- **Problem Statement:** Recipe Book (`recipes.js`)

## About

A small React application built with Vite and React Router. It shows a list of
recipes from a local dataset, lets the user search and filter them, open a recipe
to see its ingredients, and save recipes as favourites.

## Features

- Home page with total recipes, veg recipes and favourite recipes count
- Recipe list with search, Veg / Non-Veg filter and cooking time sorting
- Veg (green) / Non-Veg (red) badges and a Quick badge for recipes with cooking time up to 20 min
- Add to / Remove from Favourites toggle
- Recipe details page with ingredients list
- Favourites page with total cooking time
- Live favourites count in the navbar

## Technologies Used

- React (functional components, props, useState)
- React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`)
- Vite
- Plain CSS

## Project Structure

```
src/
├── data/
│   └── recipes.js
├── components/
│   ├── Navbar.jsx
│   └── RecipeCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── RecipeDetails.jsx
│   └── Favourites.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Installation and Setup

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```
npm run build
```
