/**
 * React context to priovide allExercises and allVisibleExercises states
 */

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
  // state to fetch and store all the exercises
  const [allExercises, setAllExercises] = useState([]);

  // state to store all the VISIBLE exercises
  const [allVisibleExercises, setAllVisibleExercises] = useState([]);

  // state to store the current visible page
  const [page, setPage] = useState(0);
  
  return (
    <exerciseContext.Provider
      value={{
        allExercises,
        setAllExercises,
        allVisibleExercises,
        setAllVisibleExercises,
        page,
        setPage,
      }}
    >
      {children}
    </exerciseContext.Provider>
  );
};

export { exerciseContext, ExerciseContextWrapper };
