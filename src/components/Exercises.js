/**
 * Component to render all the visible exercises in a grid.
 * The current page displays just EXERCISES_PER_PAGE number of exercise
 * When the page number changes, then the exercises also change
 */

import {
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import Pagination from "./Pagination";

const EXERCISES_PER_PAGE = 20;

// Maximum number of page that can be displayed as pagination at a time
const MAX_PAGINATION_PAGES = 8;

const Exercises = () => {
  const renders = useRef(0);
  const [displayPages, setDisplayPages] = useState(0);

  const { allVisibleExercises, page } = useContext(exerciseContext);

  const totalPages = Math.ceil(allVisibleExercises.length / EXERCISES_PER_PAGE);
  const startIndex = page * EXERCISES_PER_PAGE;
  const endIndex = startIndex + EXERCISES_PER_PAGE;

  const currDisplayingExercises = allVisibleExercises.slice(
    startIndex,
    endIndex
  );

  useLayoutEffect(() => {
    setDisplayPages(Math.min(MAX_PAGINATION_PAGES, totalPages));
  }, [allVisibleExercises]);

  return (
    <section className="exercises">
      <h1>
        {renders === 1
          ? "Try to search something (like: biceps, barbell, chest, etc) or just select a body part!"
          : allVisibleExercises.length === 0
          ? `Sorry, could not find any results. Try to search something else (like: biceps, barbell, chest, etc) or just select a body part!`
          : `${allVisibleExercises.length} results found :`}
      </h1>
      {allVisibleExercises.length !== 0 && (
        <>
          <section className="exercises-container">
            {currDisplayingExercises.map((exercise) => {
              return (
                <article className="exercise-card" key={exercise.id}>
                  <ExerciseCard exercise={exercise} />
                </article>
              );
            })}
          </section>
          <Pagination totalPages={totalPages} displayPages={displayPages} />
        </>
      )}
    </section>
  );
};

export default Exercises;
