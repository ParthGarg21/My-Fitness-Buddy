/**
 * React custom hook to fetch and store the details of a given exercise from the API on the first render
 */

import { useEffect } from "react";

/**
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

const useFetchExerciseById = (exerciseId, setExerciseDetails) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const fetchExercise = async () => {
    if (window.localStorage.getItem(exerciseId)) {
      setExerciseDetails(JSON.parse(window.localStorage.getItem(exerciseId)));
    }
    try {
      const res = await fetch(url, options);
      const exerciseDetails = await res.json();
      setExerciseDetails(exerciseDetails);
      window.localStorage.setItem(exerciseId, JSON.stringify(exerciseDetails));
    } catch (err) {
      setExerciseDetails({ err });
    }
  };

  useEffect(() => {
    fetchExercise();
  }, []);
};

export default useFetchExerciseById;
