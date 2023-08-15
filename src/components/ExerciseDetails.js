import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const { exerciseId } = useParams();

  return <h1>{exerciseId}</h1>;
};

export default ExerciseDetails;
