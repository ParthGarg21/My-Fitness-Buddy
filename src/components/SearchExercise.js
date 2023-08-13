/**
 * Component to render the exercise search bar and the horizontal body part menu
 */

import HorizontalBar from "./HorizontalBar";
import ExerciseSearchForm from "./ExerciseSearchForm";

const SearchExcercise = () => {
  return (
    <>
      <section className="search-exercise-con">
        <h1 className="search-title">
          Search for exercises, body parts, target muscle, gym machines or even
          gym equipment!
        </h1>
        <ExerciseSearchForm />
      </section>

      <section className="search-exercise-con">
        <h1 className="search-title">Or select a body part : </h1>
        <HorizontalBar />
      </section>
    </>
  );
};

export default SearchExcercise;
