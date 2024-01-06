/**
 * Component to render all the visible exercises in a grid.
 * The current page displays just EXERCISES_PER_PAGE number of exercise
 * When the page number changes, then the exercises also change
 */

import { useContext, useEffect, useRef, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import styles from "../styles/exercises.module.css";

// Number of exercises per page
const EXERCISES_PER_PAGE = 20;

const Exercises = () => {
  /**
   * allVisibleExercises --> all the exercises that are visible for the current search
   * totalPages --> total number of exercise pages
   * displayPages --> number of pagination buttons that can be displayed at a time
   * page --> current page index
   * startIndex --> starting index of the exercises to be displayed
   * endIndex --> ending index of the exercises to be displayed
   * currDisplayingExercises --> array of exercises to be displayed on the current page
   */

  const exerciseContainer = useRef(null);
  const renders = useRef(1);

  // State to keep the number of displaying pagination buttons
  const [displayPages, setDisplayPages] = useState(0);

  useEffect(() => {
    renders.current++;
  });

  const { allVisibleExercises, page, setPage } = useContext(exerciseContext);

  // Total pages, starting index of the exercises, and the ending index of the exercises, calculated on each re-render
  const totalPages = Math.ceil(allVisibleExercises.length / EXERCISES_PER_PAGE);
  const startIndex = page * EXERCISES_PER_PAGE;
  const endIndex = startIndex + EXERCISES_PER_PAGE;

  // Array to store the current displaying exercises calculated on each re-render
  const currDisplayingExercises = allVisibleExercises.slice(
    startIndex,
    endIndex
  );

  // Whenever the exercises change, change the number of pagination buttons that can be displayed, which will again cause a re-render.
  // Thus, passing the updated number to the "Pagination" component so that it can display the correct numbers
  useEffect(() => {
    setPage(0);
    const width = document.clientWidth;
    // Maximum number of page that can be displayed as pagination at a time
    const MAX_PAGINATION_PAGES = width > 600 ? 8 : 6;
    setDisplayPages(Math.min(MAX_PAGINATION_PAGES, totalPages));
  }, [allVisibleExercises]);

  return (
    <section
      ref={exerciseContainer}
      className={styles.exercises}
      id="exercises"
    >
      <h1>
        {renders.current === 1
          ? "Try to search something (like: biceps, barbell, chest, etc) or just select a body part!"
          : allVisibleExercises.length === 0
          ? `Sorry, could not find any results. Try to search something else (like: biceps, barbell, chest, etc) or just select a body part!`
          : `${allVisibleExercises.length} results found :`}
      </h1>
      {allVisibleExercises.length !== 0 && (
        <>
          <section className={styles.exercisesContainer}>
            {currDisplayingExercises.map((exercise) => {
              return (
                <article className={styles.exerciseCard} key={exercise.id}>
                  <Link
                    to={`/exercise/${exercise.id}`}
                    className={styles.exerciseCardLink}
                  >
                    <ExerciseCard exercise={exercise} />
                  </Link>
                </article>
              );
            })}
          </section>
          <Pagination
            totalPages={totalPages}
            displayPages={displayPages}
            exerciseContainer={exerciseContainer}
          />
        </>
      )}
    </section>
  );
};

export default Exercises;
