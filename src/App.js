import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/index.css";
import SearchExcercise from "./components/SearchExercise";
import Exercises from "./components/Exercises";
import { exerciseContext } from "./context/ExerciseContext";
import useFetchExercise from "./utils/useFetchExercises";
import { useContext } from "react";

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
    </>
  );
}

export default App;
