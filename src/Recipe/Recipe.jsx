import React, { useEffect, useState } from "react";
import style from "./Recipe.module.scss";
import RecipeCard from "./RecipeCard";
import Navbar from "../NavBar/Navbar";

const API_KEY = process.env.REACT_APP_API_RES_KEY;

const Recipe = () => {
  const APP_ID = "932399c6";

  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState([]);
  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className={style.top}>
      <form onSubmit={getSearch} className={style.form}>
        <input
          type="text"
          className={style.search}
          value={search}
          onChange={updateSearch}
        />
        <button className={style.button}>Search recipes</button>
      </form>
      <div className={style.recipe}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default Recipe;
