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

const useFetchExercise = () => {
  const { setAllExercises } = useContext(exerciseContext);

  const fetchAllExercises = async () => {
    try {
      const res = await fetch(url, options);
      const exercises = await res.json();
      console.log(exercises);
      setAllExercises(exercises);
    } catch {
      setAllExercises([]);
    }
  };

  useEffect(() => {
    fetchAllExercises();
  }, []);
};

export default useFetchExercise;
