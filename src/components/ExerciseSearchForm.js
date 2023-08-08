import { useContext, useEffect, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";

const ExerciseSearchForm = () => {
  const [value, setValue] = useState("");
  const { setExercises, allExercises } = useContext(exerciseContext);

  /**
   * when a user enters a query, then all the exercises are searched through to get the target queries
   */
  const handleForm = (e) => {
    e.preventDefault();

    const searchValue = value.toLowerCase();

    const exercises = allExercises.filter((exercise) => {
      return (
        exercise.bodyPart.toLowerCase().includes(searchValue) ||
        exercise.target.toLowerCase().includes(searchValue) ||
        exercise.equipment.toLowerCase().includes(searchValue) ||
        exercise.name.toLowerCase().includes(searchValue)
      );
    });

    setExercises(exercises);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleForm}>
      <input
        className="search-txt"
        type="text"
        value={value}
        onChange={handleValue}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default ExerciseSearchForm;
