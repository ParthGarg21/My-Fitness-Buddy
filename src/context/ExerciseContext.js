import { useState } from "react";
import { createContext } from "react";

const exerciseContext = createContext();

const ExerciseContextWrapper = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  return (
    <exerciseContext.Provider
      value={{
        exercises,
        setExercises,
      }}
    >
      {children}
    </exerciseContext.Provider>
  );
};

export { exerciseContext, ExerciseContextWrapper };
