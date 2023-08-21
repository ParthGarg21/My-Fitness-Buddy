import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SimilarMuscle = ({ target }) => {
  const { allVisibleExercises } = useContext(exerciseContext);
  const similarExercises = allVisibleExercises.filter(
    (exercise) => exercise.target === target
  );

  const similarExercisesCards = similarExercises.map((exercise) => {
    return (
      <article className="similar-exercise" key={exercise.id}>
        <ExerciseCard exercise={exercise} />
      </article>
    );
  });

  return (
    <section className="similar-equipment-exercises">
      <h1 className="related-videos-title">
        Exercises that target similar muscles:
      </h1>
      <HorizontalScrollBar>{similarExercisesCards}</HorizontalScrollBar>
    </section>
  );
};
export default SimilarMuscle;
