/**
 * Will render the second part only after all the exercises have been rendered so that 
 */

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/index.css";
import SearchExcercise from "./components/SearchExercise";
import Exercises from "./components/Exercises";
import { exerciseContext } from "./context/ExerciseContext";
import useFetchExercise from "./utils/useFetchExercises";
import { useContext } from "react";
import Pagination from "./components/Pagination";

function App() {
  useFetchExercise();
  const { allExercises } = useContext(exerciseContext);
  return (
    <>
      <NavBar />
      <Home />
      {allExercises.length === 0 ? (
        <h1>Loading the functionalities</h1>
      ) : (
        <>
          <SearchExcercise />
          <Exercises />
        </>
      )}
      {/* <Pagination totalExercises={40}/> */}
    </>
  );
}

export default App;
