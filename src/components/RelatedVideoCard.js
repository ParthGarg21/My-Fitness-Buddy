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
    <a className="video-card" href={videoUrl} target="_blank" rel="noreferrer">
      <h1 className="video-title">{shortenTitle}</h1>
      <img src={url} className={"video-thumbnail " + (isLoading ? "image-loading" : "")} onLoad={handleLoad}/>

      {isLoading ? (
        <div className="thumbnail-loading-con">
          <Oval
            height={80}
            width={80}
            primaryColor="hsl(79, 97%, 77%)"
            color="hsl(79, 63%, 50%)"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <h1 className="thumbnail-loading-text">Loading...</h1>
        </div>
      ) : (
        ""
      )}

      <div className="video-details">
        <p className="video-desc">
          <span className="video-desc-title">Channel Name:</span> {channelName}
        </p>
        <p className="video-desc">
          <span className="video-desc-title">Video Description:</span>{" "}
          {description}
        </p>
        <p className="video-desc">
          <span className="video-desc-title">Video Length:</span> {lengthText}
        </p>
        <p className="video-desc">
          <span className="video-desc-title">Total Views:</span>{" "}
          {viewCountText.split(" ")[0]}
        </p>
      </div>
    </a>
  );
};

export default RelatedVideoCard;
