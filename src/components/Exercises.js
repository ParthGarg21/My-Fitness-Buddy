import { useContext, useEffect, useRef, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { allVisibleExercises } = useContext(exerciseContext);
  return (
    <section className="exercises">
      <h1>
        {allVisibleExercises.length === 0
          ? `Sorry, could not find any results. Try to search something else (like: biceps, barbell, chest, etc) or just select a body part!`
          : `${allVisibleExercises.length} results found :`}
      </h1>
      {allVisibleExercises.length !== 0 && (
        <section className="exercises-container">
          {allVisibleExercises.map((exercise) => {
            return (
              <article className="exercise-card" key={exercise.id}>
                <ExerciseCard exercise={exercise} />
              </article>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Exercises;
