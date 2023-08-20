/**
 * Will render the second part only after all the exercises have been rendered so that
 */

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/index.css";
import useFetchExercise from "./utils/useFetchExercises";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ExerciseInfo from "./components/ExerciseInfo";

function App() {
  useFetchExercise();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise/:exerciseId" element={<ExerciseInfo />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
