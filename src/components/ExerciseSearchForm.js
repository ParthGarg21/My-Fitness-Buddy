import { useContext, useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import { exerciseContext } from "../context/ExerciseContext";

const ExerciseSearchForm = () => {
  const [value, setValue] = useState("");
  const { setExercises } = useContext(exerciseContext);

  // useEffect(() => {
  //   console.log(search);
  // });

  // Get all the excercises when the user searches, and  then filter out the ones satisfying the user's search
  // Each exercise has a bodyPart prop, target prop, name prop, equipment prop
  const handleForm = (e) => {
    e.preventDefault();
    setValue("");

    const url = "https://exercisedb.p.rapidapi.com/exercises";
    const searchValue = value.toLowerCase();

    const fetchExercises = async () => {
      const data = await fetchData(url);
      const exercises = data.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.name.toLowerCase().includes(searchValue)
        );
      });

      // console.log(exercises);
      setExercises(exercises);
    };

    fetchExercises();
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
