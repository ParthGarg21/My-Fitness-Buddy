import { useContext, useEffect } from "react";
import { exerciseContext } from "../context/ExerciseContext";

const Exercises = () => {
  const { exercises } = useContext(exerciseContext);
  useEffect(() => {
    console.log(exercises);
  });
  return (
    <section className="exercises">
      <h1>Exercises</h1>
      {exercises.map((ele) => {
        return <p>{ele.bodyPart}</p>;
      })}
    </section>
  );
};

export default Exercises;
