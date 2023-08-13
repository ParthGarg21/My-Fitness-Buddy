/**
 * Background video component
 * When any video ends, the index of the video is incremented by one, and then updates the currenty active video
 */

import { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/video-1.mp4";
import video2 from "../assets/videos/video-2.mp4";
import video3 from "../assets/videos/video-3.mp4";
import video4 from "../assets/videos/video-4.mp4";
import video5 from "../assets/videos/video-5.mp4";
import video6 from "../assets/videos/video-6.mp4";
import video7 from "../assets/videos/video-7.mp4";

const HomeVideo = () => {
  const videos = [video1, video2, video3, video4, video5, video6, video7];
  const [idx, setIdx] = useState(0);
  const [src, setSrc] = useState(videos[0]);

  const handleVideoChange = () => {
    setIdx((idx + 1) % videos.length);
  };

  useEffect(() => {
    setSrc(videos[idx]);
  }, [idx]);

  return (
    <video
      className="home-video-con"
      autoPlay={true}
      muted={true}
      onEnded={handleVideoChange}
      src={src}
    >
      <source className="home-video" type="video/mp4" />
    </video>
  );
};

export default HomeVideo;
