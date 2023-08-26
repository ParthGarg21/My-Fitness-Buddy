import { Fragment, useState } from "react";
import useFetchVideos from "../utils/useFetchVideos";
import RelatedVideoCard from "./RelatedVideoCard";
import toPascalCase from "../utils/toPascalCase";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { BarLoader } from "react-spinners";

const RelatedVideos = ({ exerciseName }) => {
  const [videos, setVideos] = useState(null);
  useFetchVideos(exerciseName, setVideos);

  const relatedVideoCards =
    videos === null
      ? []
      : videos.map((videoDetails) => {
          return (
            <Fragment key={videoDetails.video.videoId}>
              <RelatedVideoCard video={videoDetails.video} />
            </Fragment>
          );
        });

  return (
    <section className="related-content-container">
      <h1 className="related-content-title">
        Watch{" "}
        <span className="info-label">{toPascalCase(exerciseName).trim()}</span>{" "}
        related videos :{" "}
      </h1>
      {videos === null ? (
        <BarLoader color="#000000" />
      ) : videos.length === 0 ? (
        "No videos found!"
      ) : (
        <HorizontalScrollBar>{relatedVideoCards}</HorizontalScrollBar>
      )}
    </section>
  );
};

export default RelatedVideos;
