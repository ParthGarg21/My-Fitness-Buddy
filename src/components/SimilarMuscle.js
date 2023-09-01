import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { Link } from "react-router-dom";
import loadingStyles from "../styles/loading.module.css";
import similarExerciseStyles from "../styles/similarexercises.module.css"
import relatedContentStyles from "../styles/relatedcontent.module.css"

const SimilarMuscle = ({ target, id }) => {
  const { allVisibleExercises } = useContext(exerciseContext);
  const similarExercises = allVisibleExercises.filter(
    (exercise) => exercise.target === target && exercise.id !== id
  );

  const similarExercisesCards = similarExercises.map((exercise) => {
    return (
      <article className={similarExerciseStyles.relatedExerciseCard} key={exercise.id}>
        <Link to={`/exercise/${exercise.id}`} className={similarExerciseStyles.exerciseCardLink}>
          <ExerciseCard exercise={exercise} />
        </Link>
      </article>
    );
  });

  return (
    <section className={relatedContentStyles.relatedContentContainer}>
      <h1 className={relatedContentStyles.relatedContentTitle}>
        Exercises that target similar muscles:
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
export default SimilarMuscle;
