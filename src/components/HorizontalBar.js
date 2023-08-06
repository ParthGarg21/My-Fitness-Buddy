import { useContext, useRef } from "react";
import { allBodyParts, bodyPartImages } from "../utils/allBodyParts";
import BodyPartCard from "./BodyPartCard";
import { exerciseContext } from "../context/ExerciseContext";
import fetchData from "../utils/fetchData";

const HorizontalBar = () => {
  const cardsCon = useRef(null);
  const { setExercises } = useContext(exerciseContext);

  const handLeftScroll = () => {
    cardsCon.current.scrollBy(-250, 0);
  };

  const handleRightScroll = () => {
    cardsCon.current.scrollBy(250, 0);
  };

  // Get all the excercises for a body part when the user selects a body part
  // Each exercise has a bodyPart prop, target prop, name prop, equipment prop
  const handleBodyPart = (bodyPart) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
    console.log(url);
    const fetchBodyPartExercises = async () => {
      const exercises = await fetchData(url);
      console.log(exercises);
      setExercises(exercises);
    };
    fetchBodyPartExercises();
  };

  return (
    <>
      <div className="body-part-con">
        <div className="nav-con left-btn-con">
          <span className="con-nav left-arrow" onClick={handLeftScroll}>
            &lt;
          </span>
        </div>

        <div className="inner-con" ref={cardsCon}>
          {allBodyParts.map((currBodyPart, idx) => {
            return (
              <button
                className="body-part-card"
                key={idx}
                onClick={() => handleBodyPart(currBodyPart)}
              >
                <BodyPartCard
                  bodyPart={currBodyPart}
                  bodyPartImage={bodyPartImages[idx]}
                />
              </button>
            );
          })}
        </div>
        <div className="nav-con right-btn-con">
          <span className="con-nav right-arrow" onClick={handleRightScroll}>
            &gt;
          </span>
        </div>
      </div>
    </>
  );
};

export default HorizontalBar;
