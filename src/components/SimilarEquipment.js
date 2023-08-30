import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { Link } from "react-router-dom";
import loadingStyles from "../styles/loading.module.css";

const SimilarEquipment = ({ equipment, id }) => {
  const { allVisibleExercises } = useContext(exerciseContext);

  const similarExercises = allVisibleExercises.filter(
    (exercise) => exercise.equipment === equipment && exercise.id !== id
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
        Exercises that use the similar equipment:
      </h1>
      {similarExercises.length === 0 ? (
        <div className={loadingStyles.notFoundCon}>
          <h1 className={loadingStyles.notFoundText}>No exercises found!</h1>
        </div>
      ) : (
        <HorizontalScrollBar>{similarExercisesCards}</HorizontalScrollBar>
      )}
    </section>
  );
};

export default SimilarEquipment;
