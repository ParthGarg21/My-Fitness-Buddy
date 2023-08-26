import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { Link } from "react-router-dom";
const SimilarMuscle = ({ target, id }) => {
  const { allVisibleExercises } = useContext(exerciseContext);
  const similarExercises = allVisibleExercises.filter(
    (exercise) => exercise.target === target && exercise.id !== id
  );

  const similarExercisesCards = similarExercises.map((exercise) => {
    return (
      <article className="related-exercise-card" key={exercise.id}>
        <Link to={`/exercise/${exercise.id}`} className="exercise-card-link">
          <ExerciseCard exercise={exercise} />
        </Link>
      </article>
    );
  });

  return (
    <section className="related-content-container">
      <h1 className="related-content-title">
        Exercises that target similar muscles:
      </h1>
      <HorizontalScrollBar>{similarExercisesCards}</HorizontalScrollBar>
    </section>
  );
};
export default SimilarMuscle;
