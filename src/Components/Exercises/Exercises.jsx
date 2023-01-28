import React from "react";
import AllExercises from "./AllExercises";
import ExercisesTypes from "./ExercisesTypes";







function Exercises() {
  return (
    <div className="BGdark py-5 text-center ">
        <h2 className="pb-5">Exercises  Types</h2>
        <ExercisesTypes/>
        <AllExercises/>
    </div>
  );
}

export default Exercises;
