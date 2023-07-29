const BodyPartCard = ({ bodyPart }) => {
  const str = bodyPart.split(" ");
  let newStr = "";
  for (let s of str) {
    newStr += s[0].toUpperCase() + s.substr(1) + " ";
  }
  return (
    <>
      <h2>{newStr}</h2>
    </>
  );
};

export default BodyPartCard;
