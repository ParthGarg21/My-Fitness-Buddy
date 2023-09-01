import { Fragment, useState } from "react";
import useFetchVideos from "../utils/useFetchVideos";
import RelatedVideoCard from "./RelatedVideoCard";
import toPascalCase from "../utils/toPascalCase";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { BarLoader } from "react-spinners";
import loadingStyles from "../styles/loading.module.css";
import relatedContentStyles from "../styles/relatedcontent.module.css";

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
    <section className={relatedContentStyles.relatedContentContainer}>
      <h1 className={relatedContentStyles.relatedContentTitle}>
        Watch{" "}
        <span className="info-label">{toPascalCase(exerciseName).trim()}</span>{" "}
        related videos:
      </h1>
      {videos === null ? (
        <div className={loadingStyles.videosLoadingCon}>
          <h1 className={loadingStyles.loadingText}>Loading Videos...</h1>
          <BarLoader className={loadingStyles.loader} color="#000000" />
        </div>
      ) : videos.length === 0 ? (
        <div className={loadingStyles.notFoundCon}>
          <h1 className={loadingStyles.notFoundText}>No videos found!</h1>
        </div>
      ) : (
        <HorizontalScrollBar>{relatedVideoCards}</HorizontalScrollBar>
      )}
    </section>
  );
};

export default RelatedVideos;
