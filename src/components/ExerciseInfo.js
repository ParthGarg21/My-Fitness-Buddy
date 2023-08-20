import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchExerciseById from "../utils/useFetchExerciseById";
import ExerciseDetails from "./ExerciseDetails";
import RelatedVideos from "./RelatedVideos";

/**
 * Exercise contains the following data:
 * bodyPart
 * equipment
 * gifUrl
 * id
 * name
 * target
 */

const ExerciseInfo = () => {
  const { exerciseId } = useParams();
  const [exerciseDetails, setExerciseDetails] = useState(null);

  useFetchExerciseById(exerciseId, setExerciseDetails);

  return (
    <section className="exercise-info">
      {exerciseDetails === null ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ExerciseDetails exerciseDetails={exerciseDetails} />
          <RelatedVideos exerciseName={exerciseDetails.name} />
        </>
      )}
    </section>
  );
};

export default ExerciseInfo;
