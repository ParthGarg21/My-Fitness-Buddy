/**
 * Home Component
 */

import HomeVideo from "./HomeVideo";
import HomeMenu from "./HomeMenu";
import SearchExcercise from "./SearchExercise";
import Exercises from "./Exercises";
import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import useFetchExercise from "../utils/useFetchExercises";

const Home = () => {
  const { allExercises } = useContext(exerciseContext);
  useFetchExercise();
  return (
    <>
      <section className="home">
        <HomeVideo />
        <HomeMenu />
      </section>
      {allExercises.length === 0 ? (
        <h1>Loading the functionalities</h1>
      ) : (
        <>
          <SearchExcercise />
          <Exercises />
        </>
      )}
    </>
  );
};

export default Home;
