/**
 * Body Part Card Component
 */

import toPascalCase from "../utils/toPascalCase";
import styles from "../styles/bodypart.module.css";

const BodyPartCard = ({ bodyPart, bodyPartImage }) => {
  const newStr = toPascalCase(bodyPart);
  return (
    <>
      <h2 className={styles.bodyPartTitle}>{newStr}</h2>
      <img className={styles.bodyPartImg} src={bodyPartImage} alt="" />
    </>
  );
};

export default BodyPartCard;
