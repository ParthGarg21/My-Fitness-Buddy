/**
 * Will render the second part only after all the exercises have been rendered so that
 */

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import ExerciseInfo from "./components/ExerciseInfo";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:exerciseId" element={<ExerciseInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
