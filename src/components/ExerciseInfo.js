import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchExerciseById from "../utils/useFetchExerciseById";
import ExerciseDetails from "./ExerciseDetails";
import RelatedVideos from "./RelatedVideos";
import SimilarEquipment from "./SimilarEquipment";
import SimilarMuscle from "./SimilarMuscle";
import { BarLoader } from "react-spinners";
import loadingStyles from "../styles/loading.module.css";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    setExerciseDetails(null);
  }, [exerciseId]);

  useFetchExerciseById(exerciseId, setExerciseDetails);
  return (
    <section className="exercise-info">
      {exerciseDetails === null ? (
        <div className={loadingStyles.infoLoadingCon}>
          <h1 className={loadingStyles.loadingText}>Loading...</h1>
          <BarLoader
            color="#000000"
            height={5}
            width={250}
            className={loadingStyles.loader}
          />
        </div>
      ) : (
        <>
          <ExerciseDetails exerciseDetails={exerciseDetails} />
          <RelatedVideos exerciseName={exerciseDetails.name} />
          <SimilarEquipment
            equipment={exerciseDetails.equipment}
            id={exerciseDetails.id}
          />
          <SimilarMuscle
            target={exerciseDetails.target}
            id={exerciseDetails.id}
          />
        </>
      )}
    </section>
  );
};

export default ExerciseInfo;
