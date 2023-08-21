/**
 * Component to render the exercise search bar and the horizontal body part menu
 */

import BodyPartOptions from "./BodyPartOptions";
import ExerciseSearchForm from "./ExerciseSearchForm";
import { useRef } from "react";

const SearchExcercise = () => {
  const searchExerciseContainer = useRef(null);
  return (
    <section
      id="search-exercises"
      className="search-exercises-section"
      ref={searchExerciseContainer}
    >
      <section className="search-exercise-con">
        <h1 className="search-title">
          Search for exercises, body parts, target muscle, gym machines or even
          gym equipment!
        </h1>
        <ExerciseSearchForm searchExerciseContainer={searchExerciseContainer}/>
      </section>

      <section className="search-exercise-con">
        <h1 className="search-title">Or select a body part : </h1>
        <BodyPartOptions searchExerciseContainer={searchExerciseContainer}/>
      </section>
    </section>
  );
};

export default SearchExcercise;
