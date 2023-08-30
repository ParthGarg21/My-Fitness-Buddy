/**
 * Component to render the exercise search bar and the horizontal body part menu
 */

import BodyPartOptions from "./BodyPartOptions";
import ExerciseSearchForm from "./ExerciseSearchForm";
import { useRef } from "react";
import styles from "../styles/searchexercise.module.css";
import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import { BarLoader } from "react-spinners";
import useFetchExercise from "../utils/useFetchExercises";
import Exercises from "./Exercises";
import loadingStyles from "../styles/loading.module.css";

const SearchExcercise = () => {
  const { allExercises } = useContext(exerciseContext);
  useFetchExercise();

  // Storing the containter to pass the ref to the children, to enable scrolling on selecting or submitting
  const searchExerciseContainer = useRef(null);
  return (
    <>
      <section id="search-exercises" ref={searchExerciseContainer}>
        {allExercises.length === 0 ? (
          <section className={styles.searchExerciseCon}>
            <h1 className={loadingStyles.loadingText}>
              Loading the functionalities
            </h1>
            <BarLoader
              color="#ffffff"
              height={5}
              width={250}
              className={loadingStyles.loader}
            />
          </section>
        ) : (
          <>
            <section className={styles.searchExerciseCon}>
              <h1 className={styles.searchTitle}>
                Search for exercises, body parts, target muscle, gym machines or
                even gym equipment!
              </h1>
              <ExerciseSearchForm
                searchExerciseContainer={searchExerciseContainer}
              />
            </section>

            <section className={styles.searchExerciseCon}>
              <h1 className={styles.searchTitle}>Or select a body part : </h1>
              <BodyPartOptions
                searchExerciseContainer={searchExerciseContainer}
              />
            </section>
          </>
        )}
      </section>
      {allExercises.length === 0 ? "" : <Exercises />}
    </>
  );
};

export default SearchExcercise;
