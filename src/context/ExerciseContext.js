import { useState } from "react";
import { createContext } from "react";

const exerciseContext = createContext();

/**
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

const ExerciseContextWrapper = ({ children }) => {
  // state to store all the currently showing exercises

  // state to fetch and store all the exercises
  const [allExercises, setAllExercises] = useState([]);

  // state to fetch and store all the VISIBLE exercises
  const [allVisibleExercises, setAllVisibleExercises] = useState([]);


  return (
    <exerciseContext.Provider
      value={{
        allExercises,
        setAllExercises,
        allVisibleExercises,
        setAllVisibleExercises,
      }}
    >
      {children}
    </exerciseContext.Provider>
  );
};

export { exerciseContext, ExerciseContextWrapper };
