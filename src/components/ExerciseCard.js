/**
 * Exercise card component
 */

import toPascalCase from "../utils/toPascalCase";

const ExerciseCard = ({ exercise, similarCard }) => {
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

  return (
    <>
      <h1 className="exercise-name">{name}</h1>
      <img className="exercise-img" src={exercise.gifUrl} alt="" />
      <div className="definition">
        <span className="label-head">Body Part: </span>
        <span className="label">{bodyPart}</span>
      </div>
      <div className="definition">
        <span className="label-head">Target Muscle: </span>
        <span className="label">{target}</span>
      </div>
    </>
  );
};

export default ExerciseCard;
