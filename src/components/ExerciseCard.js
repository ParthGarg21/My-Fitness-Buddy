/**
 * Exercise card component
 */

import toPascalCase from "../utils/toPascalCase";
import styles from "../styles/exercisecard.module.css";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

const ExerciseCard = ({ exercise }) => {
  /**
   * Each exercise contains the following data:
   * bodyPart
   * equipment
   * gifUrl
   * id
   * name
   * target
   */

  const name = toPascalCase(exercise.name);
  const bodyPart = toPascalCase(exercise.bodyPart);
  const target = toPascalCase(exercise.target);
  const shortenedName = name.slice(0, 40) + (name.length > 40 ? "..." : "");

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <h1 className={styles.exerciseName}>{shortenedName}</h1>
      <img
        className={styles.exerciseImg + " " + (isLoading ? "image-loading" : "")}
        src={exercise.gifUrl}
        alt=""
        onLoad={handleLoad}
      />

      {isLoading ? (
        <div className="image-loading-con">
          <Oval
            height={80}
            width={80}
            primaryColor="hsl(79, 97%, 77%)"
            color="hsl(79, 63%, 50%)"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <h1 className="image-loading-text">Loading...</h1>
        </div>
      ) : (
        ""
      )}

      <div className={styles.definition}>
        <span className="label-head">Body Part: </span>
        <span className="label">{bodyPart}</span>
      </div>
      <div className={styles.definition}>
        <span className="label-head">Target Muscle: </span>
        <span className="label">{target}</span>
      </div>
    </>
  );
};

export default ExerciseCard;
