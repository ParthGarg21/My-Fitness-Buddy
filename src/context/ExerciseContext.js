import { useState } from "react";
import { createContext } from "react";

const exerciseContext = createContext();

const ExerciseContextWrapper = ({ children }) => {
  // state to store all the currently showing exercises
  const [exercises, setExercises] = useState([]);
  const [allExercises, setAllExercises] = useState([]);

  return (
    <exerciseContext.Provider
      value={{
        exercises,
        setExercises,
        allExercises,
        setAllExercises,
      }}
    >
      {children}
    </exerciseContext.Provider>
  );
};

export { exerciseContext, ExerciseContextWrapper };
