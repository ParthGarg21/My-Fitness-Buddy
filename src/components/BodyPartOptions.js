/**
 * Horizontal bar component containing all the body parts available
 * When a body part gets selected, it updates all the visible exercises
 */

import { useContext } from "react";
import { allBodyParts, bodyPartImages } from "../utils/allBodyParts";
import BodyPartCard from "./BodyPartCard";
import { exerciseContext } from "../context/ExerciseContext";
import { scrollToBottom } from "../utils/scrollPage";
import HorizontalScrollBar from "./HorizontalScrollBar";
import styles from "../styles/bodypart.module.css";

const BodyPartOptions = ({ searchExerciseContainer }) => {
  const { setAllVisibleExercises, allExercises } = useContext(exerciseContext);

  /**
   * When a user selects a bodypart, then all the exercises are searched through to get the target queries by the bodypart
   */
  const handleBodyPart = (bodyPart) => {
    const exercises = allExercises.filter((exercise) => {
      return exercise.bodyPart.toLowerCase().includes(bodyPart);
    });
    scrollToBottom(searchExerciseContainer);
    setAllVisibleExercises([...exercises]);
  };

  const allBodyPartCards = allBodyParts.map((currBodyPart, idx) => {
    return (
      <button
        className={styles.bodyPartCard}
        key={idx}
        onClick={() => handleBodyPart(currBodyPart)}
      >
        <BodyPartCard
          bodyPart={currBodyPart}
          bodyPartImage={bodyPartImages[idx]}
        />
      </button>
    );
  });

  return <HorizontalScrollBar>{allBodyPartCards}</HorizontalScrollBar>;
};

export default BodyPartOptions;
