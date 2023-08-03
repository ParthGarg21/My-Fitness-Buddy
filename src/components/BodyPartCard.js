const BodyPartCard = ({ bodyPart, bodyPartImage }) => {
  const str = bodyPart.split(" ");
  let newStr = "";
  for (let s of str) {
    newStr += s[0].toUpperCase() + s.substr(1) + " ";
  }
  return (
    <>
      <h2 className="body-part-title">{newStr}</h2>
      <img className="body-part-img" src={bodyPartImage} alt="" />
    </>
  );
};

export default BodyPartCard;
