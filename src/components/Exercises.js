import { useContext, useEffect, useRef, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { exercises } = useContext(exerciseContext);

  const [title, setTitle] = useState(
    "Try to search something, or select a body part!"
  );

  const countRenders = useRef(0);
  useEffect(() => {
    countRenders.current++;
  });

  return (
    <section className="exercises">
      <h1>
        {countRenders.current <= 1
          ? "Try to search something (like: biceps, barbell, chest, etc) or just select a body part!"
          : exercises.length === 0
          ? `Sorry, could not find any results. Try to search something else (like: biceps, barbell, chest, etc) or just select a body part!`
          : `${exercises.length} results found :`}
      </h1>
      {exercises.length !== 0 && (
        <section className="exercises-container">
          {exercises.map((exercise) => {
            return <ExerciseCard exercise={exercise} />;
          })}
        </section>
      )}
    </section>
  );
};

export default Exercises;
