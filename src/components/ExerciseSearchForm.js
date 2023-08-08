import { useContext, useEffect, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import RelatedTerms from "./RelatedTerms";

/**
 * Each exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

const MAX_RELATED_SEARCH_TERMS = 50;

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

const ExerciseSearchForm = () => {
  const [value, setValue] = useState("");
  const [relatedTerms, setRelatedTerms] = useState([]);
  const { allExercises, setAllVisibleExercises } = useContext(exerciseContext);

  /**
   * when a user enters a query, then all the exercises are searched through to get the target queries
   */
  const handleForm = (e) => {
    e.preventDefault();
    setRelatedTerms([]);

    const searchValue = value.toLowerCase();

    const exercises = allExercises.filter((exercise) => {
      return (
        exercise.bodyPart.toLowerCase().includes(searchValue) ||
        exercise.target.toLowerCase().includes(searchValue) ||
        exercise.equipment.toLowerCase().includes(searchValue) ||
        exercise.name.toLowerCase().includes(searchValue)
      );
    });

    setAllVisibleExercises(exercises);
  };

  const getRealtedExerciseTerms = () => {
    console.log(value);
    if (value === "") {
      setRelatedTerms([]);
      return;
    }
    const searchValue = value.toLowerCase();
    const currentRelatedTerms = [];
    const usedRelatedTerms = new Set();
    for (let exercise of allExercises) {
      for (let matchKey in exercise) {
        if (matchKey !== "id" && matchKey !== "gifUrl") {
          if (
            exercise[matchKey].includes(searchValue) &&
            !usedRelatedTerms.has(exercise[matchKey])
          ) {
            currentRelatedTerms.push(exercise[matchKey]);
            usedRelatedTerms.add(exercise[matchKey]);
          }
        }
      }
      if (currentRelatedTerms.length > MAX_RELATED_SEARCH_TERMS) {
        break;
      }
    }
    setRelatedTerms(currentRelatedTerms);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(relatedTerms);
  }, [relatedTerms]);

  useEffect(() => {
    getRealtedExerciseTerms();
  }, [value]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setRelatedTerms([]);
    });
  });

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
