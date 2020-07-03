import React from "react";
import style from "../Recipe/RecipeCard.scss";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <main>
      <h1>{title}</h1>
      <img src={image} alt="" />

      <p> cal{Math.round(calories)}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <p key={index}>{ingredient.text}</p>
        ))}
      </ul>
    </main>
  );
};
export default RecipeCard;
