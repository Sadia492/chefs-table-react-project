import React from "react";

export default function Sidebar({
  cook,
  handlePreparingBtn,
  preparedRecipe,
  totalTime,
  totalCalories,
}) {
  console.log(preparedRecipe);
  return (
    <div className="content-start">
      <h2 className="text-center border-b-2 pb-4 font-bold text-2xl">
        Want to cook: {cook.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cook.map((single, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{single.recipe_name}</td>
                <td>{single.preparing_time} minutes</td>
                <td>{single.calories} calories</td>
                <td>
                  <button
                    onClick={() => handlePreparingBtn(single)}
                    className="btn bg-green-500 rounded-3xl text-gray-800"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-center border-b-2 pb-4 font-bold text-2xl mt-8">
        Currently cooking:
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          {/* Make sure tbody is inside the table */}
          <tbody>
            {preparedRecipe &&
              preparedRecipe.map((single, index) => (
                <tr className="hover" key={single.recipe_id || index}>
                  <th>{index + 1}</th>
                  <td>{single.recipe_name}</td>
                  <td>{single.preparing_time}</td>
                  <td>{single.calories}</td>
                </tr>
              ))}
            <tr>
              <th colSpan="2"></th>
              <td>Total time: {totalTime || 0}</td>
              <td>Total calories: {totalCalories || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
