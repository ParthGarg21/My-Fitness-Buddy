import toPascalCase from "../utils/toPascalCase";
import bodyPartImg from "../assets/images/body-part-img.png";
import muscleImg from "../assets/images/muscle-img.png";
import equipmentImg from "../assets/images/equipment-img.png";

const ExerciseDetails = ({ exerciseDetails }) => {
  return (
    <section className="exercise-details-con">
      <div className="exercise-gif-con exercise-details-item">
        <img
          src={exerciseDetails.gifUrl}
          alt=""
          className="exercise-details-img"
        />
      </div>
      <div className="exercise-description-con exercise-details-item">
        <h1 className="exercise-detail-name">
          {toPascalCase(exerciseDetails.name)}
        </h1>
        <p className="exercise-desc">
          Exercises keep you strong.
          <br />
          <strong>{toPascalCase(exerciseDetails.name)}</strong> is one of the
          best <br />
          exercises to target your {exerciseDetails.target}. It will help you
          improve your mood and gain energy.
        </p>
        <div className="exercise-detail-target">
          <img className="body-part-detail-icon" src={bodyPartImg} alt="" />
          <div className="detail-text">
            <span>Target Body Part :</span>
            <span className="label info-label">
              {toPascalCase(exerciseDetails.bodyPart)}
            </span>
          </div>
        </div>

        <div className="exercise-detail-target">
          <img className="body-part-detail-icon" src={muscleImg} alt="" />
          <div className="detail-text">
            <span>Target Muscle :</span>
            <span className="label info-label">
              {toPascalCase(exerciseDetails.target)}
            </span>
          </div>
        </div>

        <div className="exercise-detail-target">
          <img className="body-part-detail-icon" src={equipmentImg} alt="" />
          <div className="detail-text">
            <span>Equipment :</span>
            <span className="label info-label">
              {toPascalCase(exerciseDetails.equipment)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetails;
