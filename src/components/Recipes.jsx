import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Recipe from "./Recipe";
import {
  addToCal,
  addToCurrent,
  addToLs,
  addToTime,
  getItemFromCal,
  getItemFromCurrent,
  getItemFromLS,
  getItemFromTime,
  removeItemFromLS,
} from "../Utilities/LocalStorage";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);

  const [totalTime, setTime] = useState(0);
  const [totalCalories, setCalories] = useState(0);

  const handlePreparingBtn = (single) => {
    // for finding the one
    const deletedItem = cook.find(
      (recipe) => recipe.recipe_id === single.recipe_id
    );
    addToCurrent(deletedItem.recipe_id);
    addToTime(deletedItem.preparing_time);
    addToCal(deletedItem.calories);
    removeItemFromLS(single.recipe_id);
    setPreparedRecipe([...preparedRecipe, deletedItem]);
    // for removing except the one
    const remaining = cook.filter(
      (recipe) => recipe.recipe_id !== single.recipe_id
    );
    setCalories(totalCalories + single.calories);
    setTime(totalTime + single.preparing_time);
    setCook(remaining);
  };

  useEffect(() => {
    if (recipes.length) {
      const cart = getItemFromLS();
      const savedCart = [];
      for (const id of cart) {
        const recipe = recipes.find((recipe) => recipe.recipe_id === id);
        // setCook([...cook, recipe]);
        savedCart.push(recipe);
      }
      setCook(savedCart);
    }
  }, [recipes]);
  useEffect(() => {
    if (recipes.length) {
      const time = getItemFromTime();
      const total = time.reduce((prev, curr) => prev + curr, 0);
      setTime(total);
    }
  }, [recipes]);
  useEffect(() => {
    if (recipes.length) {
      const calory = getItemFromCal();
      const total = calory.reduce((prev, curr) => prev + curr, 0);
      setCalories(total);
    }
  }, [recipes]);
  useEffect(() => {
    if (recipes.length) {
      const current = getItemFromCurrent();
      const savedCurrent = [];
      for (const id of current) {
        const recipe = recipes.find((recipe) => recipe.recipe_id === id);
        // setCook([...cook, recipe]);
        savedCurrent.push(recipe);
      }
      setPreparedRecipe(savedCurrent);
    }
  }, [recipes]);

  const handleCookBtn = (recipe, id) => {
    const isExist = cook.find((recipe) => recipe.recipe_id === id);
    if (!isExist) {
      setCook([...cook, recipe]);
      addToLs(id);
    } else {
      return alert("exist");
    }
  };
  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-center font-bold text-3xl">Our Recipes</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="grid grid-cols-3 content-start gap-6 mt-6">
        <div className="col-span-2 grid grid-cols-2 gap-6 h-full">
          {recipes.map((recipe) => (
            <Recipe
              recipe={recipe}
              handleCookBtn={handleCookBtn}
              key={recipe.recipe_id}
            ></Recipe>
          ))}
        </div>
        <Sidebar
          cook={cook}
          handlePreparingBtn={handlePreparingBtn}
          preparedRecipe={preparedRecipe}
          totalCalories={totalCalories}
          totalTime={totalTime}
        ></Sidebar>
      </div>
    </div>
  );
}

export default Recipes;
