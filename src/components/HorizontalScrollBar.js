/**
 * Horizontal scroll bar component, which can take an array of jsx elements as children, and then render them in a horizontal scroll bar
 */

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
          className={horizonBarStyle.conNav + " " + horizonBarStyle.leftArrow}
          onClick={handLeftScroll}
        >
          <span className={"material-symbols-outlined" + " " + horizonBarStyle.navIcon}>
            chevron_left
          </span>
        </span>
      </div>

      <div className={horizonBarStyle.horizontalScrollInnerCon} ref={container}>
        {children}
      </div>

      <div
        className={horizonBarStyle.navCon + " " + horizonBarStyle.rightBtnCon}
      >
        <span
          className={horizonBarStyle.conNav + " " + horizonBarStyle.rightArrow}
          onClick={handleRightScroll}
        >
          <span className={"material-symbols-outlined" + " " + horizonBarStyle.navIcon}>
            chevron_right
          </span>
        </span>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
