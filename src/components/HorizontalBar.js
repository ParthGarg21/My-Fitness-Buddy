import { useEffect, useRef, useState } from "react";
import allBodyParts from "../styles/allBodyParts";
import BodyPartCard from "./BodyPartCard";

const HorizontalBar = () => {
  const cardsCon = useRef(null);

  const handLeftScroll = () => {
    cardsCon.current.scrollBy(-250, 0);
  };

  const handleRightScroll = () => {
    cardsCon.current.scrollBy(250, 0);
  };

  return (
    <>
      <div className="body-part-con">
        <button className="con-nav left-arrow" onClick={handLeftScroll}>
          &lt;
        </button>
        <button className="con-nav right-arrow" onClick={handleRightScroll}>
          &gt;
        </button>
        <div className="inner-con" ref={cardsCon}>
          {allBodyParts.map((bodyPart, idx) => {
            return (
              <article className="body-part-card" key={idx}>
                <BodyPartCard bodyPart={bodyPart} />
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HorizontalBar;
