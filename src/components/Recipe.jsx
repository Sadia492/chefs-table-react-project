import React from "react";

export default function Recipe({ recipe, handleCookBtn }) {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div>
      <div className="border-2 p-5 rounded-xl shadow-xl">
        <figure className="">
          <img className="rounded-xl" src={recipe_image} alt="img" />
        </figure>
        <div className=" p-4">
          <h2 className="font-bold text-2xl">{recipe_name}</h2>
          <p className="border-b-2 pb-3">{short_description}</p>
          <p className="font-bold text-xl">ingredients:{ingredients.length}</p>
          {ingredients.map((single, i) => (
            <li key={i}>{single}</li>
          ))}

          <div className="flex border-t-2 gap-4 py-3 mt-3">
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {preparing_time}
            </p>
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              {calories}
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleCookBtn(recipe, recipe_id)}
              className="btn bg-green-500 rounded-3xl text-gray-800"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
