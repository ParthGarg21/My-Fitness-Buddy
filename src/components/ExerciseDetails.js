import toPascalCase from "../utils/toPascalCase";
import bodyPartImg from "../assets/images/body-part-img.png";
import muscleImg from "../assets/images/muscle-img.png";
import equipmentImg from "../assets/images/equipment-img.png";
import styles from "../styles/exercisedetails.module.css"

const ExerciseDetails = ({ exerciseDetails }) => {
  return (
    <section className={styles.exerciseDetailsCon}>
      <div className={styles.exerciseGifCon + " " + styles.exerciseDetailsItem}>
        <img
          src={exerciseDetails.gifUrl}
          alt=""
          className={styles.exerciseDetailsImg}
        />
      </div>
      <div className={styles.exerciseDescriptionCon + " " + styles.exerciseDetailsItem}>
        <h1 className={styles.exerciseDetailName}>
          {toPascalCase(exerciseDetails.name)}
        </h1>
        <p className={styles.exerciseDesc}>
          Exercises keep you strong.
          <br />
          <strong>{toPascalCase(exerciseDetails.name)}</strong> is one of the
          best <br />
          exercises to target your {exerciseDetails.target}. It will help you
          improve your mood and gain energy.
        </p>
        <div className={styles.exerciseDetailTarget}>
          <img className={styles.bodyPartDetailIcon} src={bodyPartImg} alt="" />
          <div className={styles.detailText}>
            <span>Target Body Part :</span>
            <span className="label info-label">
              {toPascalCase(exerciseDetails.bodyPart)}
            </span>
          </div>
        </div>

        <div className={styles.exerciseDetailTarget}>
          <img className={styles.bodyPartDetailIcon} src={muscleImg} alt="" />
          <div className={styles.detailText}>
            <span>Target Muscle :</span>
            <span className="label info-label">
              {toPascalCase(exerciseDetails.target)}
            </span>
          </div>
        </div>

        <div className={styles.exerciseDetailTarget}>
          <img className={styles.bodyPartDetailIcon} src={equipmentImg} alt="" />
          <div className={styles.detailText}>
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
