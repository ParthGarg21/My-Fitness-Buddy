import { Fragment, useState } from "react";
import useFetchVideos from "../utils/useFetchVideos";
import RelatedVideoCard from "./RelatedVideoCard";
import toPascalCase from "../utils/toPascalCase";
import HorizontalScrollBar from "./HorizontalScrollBar";

const RelatedVideos = ({ exerciseName }) => {
  const [videos, setVideos] = useState([]);
  useFetchVideos(exerciseName, setVideos);
  const relatedVideoCards = videos.map((videoDetails) => {
    return (
      <Fragment key={videoDetails.video.videoId}>
        <RelatedVideoCard video={videoDetails.video} />
      </Fragment>
    );
  });

  return (
    <section className="related-videos">
      <h1 className="related-videos-title">
        Watch {toPascalCase(exerciseName)} related videos :{" "}
      </h1>
      {videos.length === 0 ? (
        "Loading..."
      ) : (
        <HorizontalScrollBar>{relatedVideoCards}</HorizontalScrollBar>
      )}
    </section>
  );
};

export default RelatedVideos;
