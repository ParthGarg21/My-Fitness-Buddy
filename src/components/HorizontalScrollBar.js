import { useRef } from "react";
import horizonBarStyle from "../styles/horizontal-bar.module.css";

const HorizontalScrollBar = ({ children }) => {
  const container = useRef(null);
  const handLeftScroll = () => {
    container.current.scrollBy(-350, 0);
  };

  const handleRightScroll = () => {
    container.current.scrollBy(350, 0);
  };


  return (
    <div className={horizonBarStyle.horizontalScrollBar}>
      <div
        className={horizonBarStyle.navCon + " " + horizonBarStyle.leftBtnCon}
      >
        <span
          className={
            horizonBarStyle.conNav +
            " " +
            horizonBarStyle.leftArrow +
            " " +
            horizonBarStyle.videoArrow
          }
          onClick={handLeftScroll}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </span>
      </div>

      <div
        className={
          horizonBarStyle.horizontalScrollInnerCon +
          " " +
          horizonBarStyle.videoInnerScroll
        }
        ref={container}
      >
        {children}
      </div>

      <div
        className={horizonBarStyle.navCon + " " + horizonBarStyle.rightBtnCon}
      >
        <span
          className={
            horizonBarStyle.conNav +
            " " +
            horizonBarStyle.rightArrow +
            " " +
            horizonBarStyle.videoArrow
          }
          onClick={handleRightScroll}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </span>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
