/**
 *
 * Video contains the following details:
 * channelName
 * description
 * lengthText
 * publishedTimeText
 * thumbnails (an array where each element is an object containing info about a thumbnail cotaining the "url" of the thumbnail)
 * title
 * viewCountText
 * videoId
 */

import { useState } from "react";
import { Oval } from "react-loader-spinner";
import loadingStyles from "../styles/loading.module.css";
import videoStyles from "../styles/videocard.module.css";

const RelatedVideoCard = ({ video }) => {
  const {
    channelName,
    title,
    description,
    lengthText,
    viewCountText,
    thumbnails,
    videoId,
  } = video;

  const { url } = thumbnails[0];
  const shortenTitle = title.slice(0, 50) + (title.length > 50 ? " ..." : "");
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <a
      className={videoStyles.videoCard}
      href={videoUrl}
      target="_blank"
      rel="noreferrer"
    >
      <h1 className={videoStyles.videoTitle}>{shortenTitle}</h1>
      <img
        alt=""
        src={url}
        className={
          videoStyles.videoThumbnail +
          " " +
          (isLoading ? loadingStyles.imageLoading : "")
        }
        onLoad={handleLoad}
      />

      {isLoading ? (
        <div className={loadingStyles.thumbnailLoadingCon}>
          <Oval
            height={80}
            width={80}
            primaryColor="hsl(79, 97%, 77%)"
            color="hsl(79, 63%, 50%)"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <h1 className={loadingStyles.loadingText}>Loading...</h1>
        </div>
      ) : (
        ""
      )}

      <div className={videoStyles.videoDetails}>
        <p className={videoStyles.videoDesc}>
          <span className={videoStyles.videoDescTitle}>Channel Name:</span>{" "}
          {channelName}
        </p>
        <p className={videoStyles.videoDesc}>
          <span className={videoStyles.videoDescTitle}>Video Description:</span>{" "}
          {description}
        </p>
        <p className={videoStyles.videoDesc}>
          <span className={videoStyles.videoDescTitle}>Video Length:</span>{" "}
          {lengthText}
        </p>
        <p className={videoStyles.videoDesc}>
          <span className={videoStyles.videoDescTitle}>Total Views:</span>{" "}
          {viewCountText.split(" ")[0]}
        </p>
      </div>
    </a>
  );
};

export default RelatedVideoCard;
