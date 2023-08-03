import { useContext, useEffect, useRef, useState } from "react";
import { allBodyParts, bodyPartImages } from "../styles/allBodyParts";
import BodyPartCard from "./BodyPartCard";
import { bodyPartContext } from "../context/BodyPartContext";

const HorizontalBar = () => {
  const cardsCon = useRef(null);
  const { bodyPart, setBodyPart } = useContext(bodyPartContext);
  useEffect(() => {
    console.log(bodyPart);
  });

  const handLeftScroll = () => {
    cardsCon.current.scrollBy(-250, 0);
  };

  const handleRightScroll = () => {
    cardsCon.current.scrollBy(250, 0);
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
          {allBodyParts.map((bodyPart, idx) => {
            return (
              <button
                className="body-part-card"
                key={idx}
                onClick={() => {
                  setBodyPart(bodyPart);
                }}
              >
                <BodyPartCard
                  bodyPart={bodyPart}
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
