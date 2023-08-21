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
  return (
    <a className="video-card" href={videoUrl} target="_blank" rel="noreferrer">
      <h1 className="video-title">{shortenTitle}</h1>
      <img src={url} alt="" className="video-thumbnail" />
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
