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
  const { channelName, title, description, lengthText, thumbnails } = video;
  const { url } = thumbnails[0];
  return (
    <article className="video-card">
      <h1>{title}</h1>
      <p className="video-desc">{description}</p>
      <img src={url} alt="" className="video-thumbnail" />
    </article>
  );
};

export default RelatedVideoCard;
