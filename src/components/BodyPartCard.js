/**
 * Body Part Card Component
 */

import toPascalCase from "../utils/toPascalCase";

const BodyPartCard = ({ bodyPart, bodyPartImage }) => {
  const newStr = toPascalCase(bodyPart);
  return (
    <>
      <h2 className="body-part-title">{newStr}</h2>
      <img className="body-part-img" src={bodyPartImage} alt="" />
    </>
  );
};

export default BodyPartCard;
