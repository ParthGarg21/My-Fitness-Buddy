/**
 * React custom hook to fetch and store ALL the available exercises from the API on the first render
 */

import { useContext, useEffect } from "react";
import { exerciseContext } from "../context/ExerciseContext";

const url = "https://exercisedb.p.rapidapi.com/exercises";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_EXCERCISEDB_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

/**
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

const useFetchExercise = () => {
  const { setAllExercises } = useContext(exerciseContext);

  const fetchAllExercises = async () => {
    try {
      const res = await fetch(url, options);
      const exercises = await res.json();
      setAllExercises(exercises);
      console.log(exercises);
    } catch (err) {
      console.log(err);
      setAllExercises([]);
    }
  };

  useEffect(() => {
    fetchAllExercises();
  }, []);
};

export default useFetchExercise;
