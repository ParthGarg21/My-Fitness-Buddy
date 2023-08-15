/**
 * Home Component
 */

import HomeVideo from "./HomeVideo";
import HomeMenu from "./HomeMenu";
import SearchExcercise from "./SearchExercise";
import Exercises from "./Exercises";
import { useContext } from "react";
import { exerciseContext } from "../context/ExerciseContext";

const Home = () => {
  const { allExercises } = useContext(exerciseContext);

  return (
    <section className="home">
      <HomeVideo />
      <HomeMenu />
      {allExercises.length === 0 ? (
        <h1>Loading the functionalities</h1>
      ) : (
        <>
          <SearchExcercise />
          <Exercises />
        </>
      )}
    </section>
  );
};

export default Home;
