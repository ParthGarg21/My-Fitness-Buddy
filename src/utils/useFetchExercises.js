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
  const {
    setAllExercises,
    // setAllBodyParts,
    // setAllEquipments,
    // setAllTargetMuscles,
    // setAllNames,
  } = useContext(exerciseContext);

  const fetchAllExercises = async () => {
    try {
      const res = await fetch(url, options);
      const exercises = await res.json();
      setAllExercises(exercises);
      // setAllBodyParts(exercises.map((exercise) => exercise.bodyPart));
      // setAllEquipments(exercises.map((exercise) => exercise.equipment));
      // setAllTargetMuscles(exercises.map((exercise) => exercise.target));
      // setAllNames(exercises.map((exercise) => exercise.name));

      console.log(exercises);
    } catch(err) {
      console.log(err)
      setAllExercises([]);
    }
  };

  useEffect(() => {
    fetchAllExercises();
  }, []);
};

export default useFetchExercise;
