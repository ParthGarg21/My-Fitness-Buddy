/**
 * Horizontal bar component containing all the body parts available
 * When a body part gets selected, it updates all the visible exercises
 */

import { useContext, useRef } from "react";
import { allBodyParts, bodyPartImages } from "../utils/allBodyParts";
import BodyPartCard from "./BodyPartCard";
import { exerciseContext } from "../context/ExerciseContext";
import { scrollToBottom } from "../utils/scrollPage";

const HorizontalBar = ({ searchExerciseContainer }) => {
  const cardsCon = useRef(null);
  const { setAllVisibleExercises, allExercises } =
    useContext(exerciseContext);

  const handLeftScroll = () => {
    cardsCon.current.scrollBy(-250, 0);
  };

  const handleRightScroll = () => {
    cardsCon.current.scrollBy(250, 0);
  };

  /**
   * When a user selects a bodypart, then all the exercises are searched through to get the target queries by the bodypart
   */
  const handleBodyPart = (bodyPart) => {
    const exercises = allExercises.filter((exercise) => {
      return exercise.bodyPart.toLowerCase().includes(bodyPart);
    });
    scrollToBottom(searchExerciseContainer);
    setAllVisibleExercises([...exercises]);
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
