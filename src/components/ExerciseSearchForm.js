/**
 * Component that handles the searching logic
 */

import { useContext, useEffect, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import RelatedTerms from "./RelatedTerms";
import { scrollToBottom } from "../utils/scrollPage";

/**
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

// Limit on the maximum related terms that can be displayed
const MAX_RELATED_SEARCH_TERMS = 50;

// Styles to be applied to set the border radius for the search input and the search button
const borderRadius = {
  searchBtn: {
    both: "0 .5rem .5rem 0",
    onlyTop: "0 .5rem 0 0",
  },

  searchInput: {
    both: ".5rem 0 0 .5rem",
    onlyTop: ".5rem 0 0 0",
  },
};

const ExerciseSearchForm = ({ searchExerciseContainer }) => {
  // State to manage the input value
  const [value, setValue] = useState("");

  // State to manage the related terms
  const [relatedTerms, setRelatedTerms] = useState([]);

  // Getting the required things from the "exerciseContext" context
  const { allExercises, setAllVisibleExercises } = useContext(exerciseContext);

  /**
   * when a user submits a search term, then all the exercises are searched through to get the target queries, and the related terms are emptied
   */
  const handleForm = (e) => {
    e.preventDefault();
    setRelatedTerms([]);

    const searchValue = value.trim().toLowerCase();
    if (searchValue === "") {
      return;
    }

    const exercises = allExercises.filter((exercise) => {
      return (
        exercise.bodyPart.toLowerCase().includes(searchValue) ||
        exercise.target.toLowerCase().includes(searchValue) ||
        exercise.equipment.toLowerCase().includes(searchValue) ||
        exercise.name.toLowerCase().includes(searchValue)
      );
    });
    scrollToBottom(searchExerciseContainer);
    setAllVisibleExercises([...exercises]);
  };

  // Function to get the all the related terms on the basis of the current "value" by searching in all the exercises
  const getRealtedExerciseTerms = () => {
    let searchValue = value.trim();

    // If the value if empty, then empty all the related terms
    if (searchValue === "") {
      setRelatedTerms([]);
      return;
    }

    searchValue = searchValue.toLowerCase();
    const currentRelatedTerms = [];

    // Keeping a set to store all the already added terms in the related terms array
    const usedRelatedTerms = new Set();

    for (let exercise of allExercises) {
      // Search in all the keys of each exercise except "id" and "gifUrl"
      for (let matchKey in exercise) {
        if (matchKey !== "id" && matchKey !== "gifUrl") {
          // If the current value is there in this prop and it is not already there, then add in the related terms array
          if (
            exercise[matchKey].includes(searchValue) &&
            !usedRelatedTerms.has(exercise[matchKey])
          ) {
            currentRelatedTerms.push(exercise[matchKey]);
            usedRelatedTerms.add(exercise[matchKey]);
          }
        }
      }

      // If the total terms have reached the maximum number, don't add any more
      if (currentRelatedTerms.length === MAX_RELATED_SEARCH_TERMS) {
        break;
      }
    }

    // If the related terms
    setRelatedTerms(currentRelatedTerms);
  };

  // Update the value state and the input text when the user enters some text
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  // When the value state is updated, then get the updated related terms using the debounces version
  useEffect(() => {
    getRealtedExerciseTerms();
  }, [value]);

  /**
   * When the component first renders, attach an event listener to the entire document.
   * When a user clicks anywhere else, the related terms popup will close
   */
  useEffect(() => {
    document.addEventListener("click", (e) => {
      setRelatedTerms([]);
    });
  }, []);

  return (
    <>
      <div className="search-form-con">
        <form className="search-form" onSubmit={handleForm}>
          <input
            className="search-txt"
            type="text"
            value={value}
            onChange={handleValue}
            style={
              relatedTerms.length === 0
                ? { borderRadius: borderRadius.searchInput.both }
                : { borderRadius: borderRadius.searchInput.onlyTop }
            }
          />
          <button
            style={
              relatedTerms.length === 0
                ? { borderRadius: borderRadius.searchBtn.both }
                : { borderRadius: borderRadius.searchBtn.onlyTop }
            }
            className="search-btn"
            type="submit"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <RelatedTerms
            relatedTerms={relatedTerms}
            setRelatedTerms={setRelatedTerms}
            setValue={setValue}
          />
        </form>
      </div>
    </>
  );
};

export default ExerciseSearchForm;
