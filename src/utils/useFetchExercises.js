/**
 * React custom hook to fetch and store ALL the available exercises from the API on the first render
 */

import { useContext, useEffect } from "react";
import { exerciseContext } from "../context/ExerciseContext";

/**
 * The result is an array of exercise objects.
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

// hook to fetch excercises from the db
// used inside the search excercise component
// just fetches all the exerciess
// stores inside a state
const useFetchExercise = () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=100000";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const { setAllExercises } = useContext(exerciseContext);

  const fetchAllExercises = async () => {
    try {
      const res = await fetch(url, options);
      const exercises = await res.json();
      setAllExercises(exercises);
      window.localStorage.setItem("exercises", JSON.stringify(exercises));
    } catch (err) {
      setAllExercises([]);
    }
  };

  useEffect(() => {
    fetchAllExercises();
  }, []);
};

export default useFetchExercise;
