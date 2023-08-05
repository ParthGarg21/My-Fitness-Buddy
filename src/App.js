import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/index.css";
import SearchExcercise from "./components/SearchExercise";
import Exercises from "./components/Exercises";
import { ExerciseContextWrapper } from "./context/ExerciseContext";

function App() {
  return (
    <>
      <ExerciseContextWrapper>
        <NavBar />
        <Home />
        <SearchExcercise />
        <Exercises />
      </ExerciseContextWrapper>
    </>
  );
}

export default App;
