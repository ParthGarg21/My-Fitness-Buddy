import { Fragment, useEffect, useRef, useState } from "react";
import useFetchVideos from "../utils/useFetchVideos";
import RelatedVideoCard from "./RelatedVideoCard";
import horizonBarStyle from "../styles/horizontal-bar.module.css";

const RelatedVideos = ({ exerciseName }) => {
  const [videos, setVideos] = useState([]);
  const videosCon = useRef(null);
  useFetchVideos(exerciseName, setVideos);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  const handLeftScroll = () => {
    videosCon.current.scrollBy(-250, 0);
  };

  const handleRightScroll = () => {
    videosCon.current.scrollBy(250, 0);
  };

  return (
    <section className="related_videos">
      {videos.length === 0 ? (
        "Loading..."
      ) : (
        <div className={horizonBarStyle.horizontalScrollBar}>
          <div
            className={
              horizonBarStyle.navCon + " " + horizonBarStyle.leftBtnCon
            }
          >
            <span
              className={
                horizonBarStyle.conNav + " " + horizonBarStyle.leftArrow
              }
              onClick={handLeftScroll}
            >
              &lt;
            </span>
          </div>

          <div
            className={horizonBarStyle.horizontalScrollInnerCon}
            ref={videosCon}
          >
            {videos.map((videoDetails) => {
              return (
                <Fragment key={videoDetails.video.videoId}>
                  <RelatedVideoCard video={videoDetails.video} />
                </Fragment>
              );
            })}
          </div>

          <div
            className={
              horizonBarStyle.navCon + " " + horizonBarStyle.rightBtnCon
            }
          >
            <span
              className={
                horizonBarStyle.conNav + " " + horizonBarStyle.rightArrow
              }
              onClick={handleRightScroll}
            >
              &gt;
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default RelatedVideos;
