import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function BodyPartExercises() {
  const { bodypart } = useParams();

  const [exercises, setExercises] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  async function bodyPartsExercises(callback) {
    let { data } = await axios.get(`http://localhost:5000/api/v1/exercises/${bodypart}`);
    callback(data.exercises);
  }

  useEffect(() => {
    bodyPartsExercises(setExercises);
  }, []);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <div className="container mt-5 py-5 px-5 bg-dark rounded text-start">
        <h2 className="pb-5 text-center">{bodypart.charAt(0).toUpperCase() + bodypart.slice(1)} Exercises </h2>
      <div className="row">
        {currentExercises.map((exercise, index) => (
          <div key={index} className="col-md-4 my-3 ">
            <img
              className="w-100 rounded"
              src={exercise.gifUrl}
              alt={exercise.name}
            />
            <div className="py-2">
              <span class="badge rounded-pill text-bg-danger">{exercise.bodyPart}</span> 
              <span class="badge rounded-pill text-bg-warning mx-1">{exercise.target}</span> 
              <span class="badge rounded-pill text-bg-success">{exercise.equipment}</span>
            </div>

            <h5>{exercise.name}</h5>
          </div>
        ))}
      </div>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center" color="error">
        {exercises.length > 9 && (
          <Pagination
            color="error"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
}

export default BodyPartExercises;
